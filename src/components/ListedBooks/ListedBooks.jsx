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
        } else {
            setDisplayBooks([])
            setDisplayBooks([])
        }
    }, [wishlistKey, books]);

    const handleFilter = filter => {
        const sortedBooks = [...listedBooks]

        if(filter === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        }
        else if (filter === 'numberOfPage') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        }
        else if (filter === 'publishedYear') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        setDisplayBooks(sortedBooks)
    }

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
                    <option value="rating">Rating</option>
                    <option value="numberOfPage">Number of Pages</option>
                    <option value="publishedYear">Published Year</option>
                </select>
            </div>

            {/* Read and Wishlist Buttons */}
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
