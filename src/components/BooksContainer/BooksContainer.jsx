import { useEffect, useState } from "react";
import BooksCard from "../BooksCard/BooksCard";

const BooksContainer = () => {
    const[books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <p>hi form books container</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-9 my-16">
                {
                    books.map(book =>
                        <BooksCard
                            key={book.bookId}
                            book={book}
                        ></BooksCard>
                    )
                }
            </div>
        </div>
    );
};

export default BooksContainer;