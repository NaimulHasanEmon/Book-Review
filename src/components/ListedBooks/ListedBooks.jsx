import { NavLink, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListedBooks } from "../../utility/localStorage";
import WishlistBooksCard from "../WishlistBooksCard/WishlistBooksCard";
import ReadBooks from "../ReadBooks/ReadBooks";
import './ListedBooks.css'
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Listed Books</title>
            </Helmet>
            <div className="bg-base-200 py-1 rounded-2xl">
                <p className="flex justify-center my-5 text-4xl font-bold">Books</p>
            </div>

            {/* Dropdown filter */}
            <div className={`flex mt-5 justify-center ${listedBooks.length <= 0 && "hidden"}`}>
                <select
                    className="select bg-green-500 text-white text-base w-[184px] font-semibold"
                    onChange={(e) => handleFilter(e.target.value)}
                >
                    <option disabled hidden selected>
                        Sort By
                    </option>
                    <option className="bg-base-200 text-black text-sm" value="rating">Rating</option>
                    <option className="bg-base-200 text-black text-sm" value="numberOfPage">Number of pages</option>
                    <option className="bg-base-200 text-black text-sm" value="publishedYear">Published year</option>
                </select>
            </div>

            {/* Read and Wishlist Buttons */}
            <div className="my-5 border-b">
                <div className="flex gap-3">
                    <button
                        className={`p-2 text-slate-400 ${wishlistKey === "read-books" ? "active" : ""}`}
                        onClick={() => setWishlistKey("read-books")}>
                        Read Books
                    </button>
                    <button
                        className={`p-2 text-slate-400 ${wishlistKey === "wishList-books" ? "active" : ""}`}
                        onClick={() => setWishlistKey("wishList-books")}>
                        Wishlist Books
                    </button>
                </div>
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
