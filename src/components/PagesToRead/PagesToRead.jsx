import { useLoaderData } from "react-router-dom";
import { getListedBooks } from "../../utility/localStorage";
import PagesToReadChart from "../PagesToReadChart/PagesToReadChart";

const PagesToRead = () => {
    const allBooks = useLoaderData()
    const allReadBooks = getListedBooks('read-books')

    const allData = allBooks.filter(book => allReadBooks.includes(book.bookId))

    return (
        <div>
            <div className="bg-base-200 rounded-3xl flex my-5 py-14 justify-center">
                <PagesToReadChart
                    books={allData}
                ></PagesToReadChart>
            </div>
        </div>
    );
};

export default PagesToRead;