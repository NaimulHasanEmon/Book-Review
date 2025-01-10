import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListedBooks } from "../../utility/localStorage";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard"
import { NavLink } from "react-router-dom";

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
            <div>
                <p className="flex justify-center my-5 text-4xl font-bold">Books</p>
            </div>
            <div className={`flex my-3 justify-center ${listedBooks.length <= 0 && 'hidden'}`}>
                <select 
                    className="select bg-slate-100"
                    onChange={(e) => handleFilter(e.target.value)}>
                    <option disabled hidden selected>Filter By</option>
                    <option value="all">All</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                    <option value="fullTime">Full Time</option>
                </select>
            </div>
            <div className="mb-5">
                <div className="flex gap-3">
                    <div className="">
                        <NavLink to=''>
                            <button className="">Read Books</button>
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to=''>
                            <button className="">Wishlist Books</button>
                        </NavLink>
                    </div>
                </div>
                <hr />
            </div>
            <div className="flex flex-col gap-5 my-10">
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