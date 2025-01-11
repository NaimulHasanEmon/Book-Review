import { NavLink, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListedBooks } from "../../utility/localStorage";
import WishlistBooksCard from "../WishlistBooksCard/WishlistBooksCard";
import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([])
    const [wishlistKey, setWishlistKey] = useState("read-books");
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const listOfTheBooks = getListedBooks(wishlistKey);
        if(listOfTheBooks.length > 0) {
            const list = books.filter(book => listOfTheBooks.includes(book.bookId))
            setListedBooks(list)
            setDisplayBooks(list)
        }
    }, [wishlistKey, books]);

    return (
        <div>
            <div>
                <p className="flex justify-center my-5 text-4xl font-bold">Books</p>
            </div>

            {/* Dropdown filter */}
            <div className={`flex my-3 justify-center ${listedBooks.length <= 0 && "hidden"}`}>
                <select
                    className="select bg-slate-100"
                    onChange={(e) => handleFilter(e.target.value)}
                >
                    <option disabled hidden selected>
                        Filter By
                    </option>
                    <option value="all">All</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">Onsite</option>
                    <option value="fullTime">Full Time</option>
                </select>
            </div>

            {/* Navigation buttons */}
            <div className="mb-5">
                <div className="flex gap-3">
                    <NavLink to=''>
                        <button
                            className=""
                            onClick={() => setWishlistKey("read-books")}>Read Books
                        </button>
                    </NavLink>
                    <NavLink to=''>
                        <button
                            className=""
                            onClick={() => setWishlistKey("wishList-books")}>Wishlist Books
                        </button>
                    </NavLink>
                </div>
                <hr />
            </div>

            {/* Dynamic rendering based on `wishlistKey` */}
            <div className="flex flex-col gap-5 my-10">
                {wishlistKey === "read-books" &&
                    displayBooks.map((book) => (
                        <ReadBooks key={book.bookId} book={book} />
                    ))}
                {wishlistKey === "wishList-books" &&
                    displayBooks.map((book) => (
                        <WishlistBooksCard key={book.bookId} book={book} />
                    ))}
            </div>
        </div>
    );
};

export default ListedBooks;
