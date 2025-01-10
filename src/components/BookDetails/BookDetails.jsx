import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { bookExists, saveListedBooks } from '../../utility/localStorage';

const BookDetails = () => {
    const bookInfo = useLoaderData();
    const {bookId} = useParams();
    const bId = parseInt(bookId)
    const book = bookInfo.find(book => book.bookId === bId);
    const{bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing} = book

    const handleReadBook = () => {
        if (bookExists(bId)) {
            toast('Already Added!');
        } else {
            saveListedBooks(bId);
            toast('Book Added to Book List.');
        }
    };    

    return (
        <div className="md:flex lg:flex gap-10 my-10">
            {/* Image */}
            <div className="md:w-1/2 lg:w-1/2 bg-base-200 flex justify-center items-center rounded-xl shadow-xl">
                <img className="max-h-96 md:max-h-[400px] lg:max-h-[400px]" src={image} alt={bookName} />
            </div>
            {/* Book Details */}
            <div className="md:w-1/2 lg:w-1/2 flex flex-col gap-2 mt-10 md:mt-0 lg:mt-0">
                <p className="text-3xl font-serif font-semibold">{bookName}</p>
                <p className="font-mono">By: {author}</p>
                <p className="border-y-2 border-slate-300 py-4">{category}</p>
                <p><span className="font-bold">Review: </span>{review}</p>
                <div className="flex gap-3 items-center border-b-2 border-slate-300 pb-4">
                    <p className="font-bold">Tags: </p>
                    {
                        tags.map((tag, index) =>
                            <div key={index} className="badge badge-ghost text-green-500 font-semibold">
                                #{tag}
                            </div>
                        )
                    }
                </div>
                <div className="flex gap-14">
                    <div>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div>
                        <p className="font-bold">{totalPages}</p>
                        <p className="font-bold">{publisher}</p>
                        <p className="font-bold">{yearOfPublishing}</p>
                        <p className="font-bold">{rating}</p>
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-5">
                    <div>
                        <button
                        onClick={() => handleReadBook()}
                        className="btn border border-slate-400 font-bold">Read Book</button>
                    </div>
                    <div>
                        <button className="btn btn-accent text-white">Add Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;