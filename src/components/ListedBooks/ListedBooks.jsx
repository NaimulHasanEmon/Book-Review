import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListedBooks } from "../../utility/localStorage";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard"

const ListedBooks = () => {
    const books = useLoaderData()

    const[listedBooks, setListedBooks] = useState([])
    const[displayBooks, setDisplayBooks] = useState([])

    useEffect(() => {
        const listOfTheBooks = getListedBooks()
        if(listOfTheBooks.length > 0) {
            const list = books.filter(book => listOfTheBooks.includes(book.bookId))
            setListedBooks(list)
            setDisplayBooks(list)
        }
    },[])

    return (
        <div>
            <p>Listed</p>
            <div className={`flex my-3 justify-center`}>
            {/* ${appliedJobs.length <= 0 && 'hidden'} */}
                    <select 
                        className="select bg-slate-100"
                        onChange={(e) => handleFilter(e.target.value)}
                    >
                        <option disabled hidden selected>Filter By</option>
                        <option value="all">All</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                        <option value="fullTime">Full Time</option>
                    </select>
                </div>
            <div>
                {
                    displayBooks.map(book =>
                        <ListedBooksCard
                            key={book.bookId}
                            book={book}
                        ></ListedBooksCard>
                    )
                }
            </div>
        </div>
    );
};

export default ListedBooks;