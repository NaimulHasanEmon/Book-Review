import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline, IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListedBooksCard = ({book}) => {
    const{bookId, bookName, author, image, rating, category, tags, totalPages, publisher, yearOfPublishing} = book

    return (
        <div>
            <div className="border rounded-xl shadow-lg">
                <div className="md:flex lg:flex p-4 gap-5">
                    <div className="bg-gray-200 bg-opacity-70 min-h-28 md:min-h-36 lg:min-h-36 md:min-w-52 lg:min-w-52 items-center flex flex-col justify-center rounded-xl mb-5 md:mb-0 lg:mb-0">
                        <img src={image} className="rounded-lg h-72 md:h-36 lg:h-36 mx-10 p-4" />
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold font-serif">{bookName}
                            </h1>
                            <p className="font-mono">By: {author}
                            </p>
                            <div className="flex gap-7 items-center">
                                <div className="flex gap-2 items-center">
                                    <p className="font-bold">Tag 
                                    </p>
                                    {
                                        tags.map((tag, index) =>
                                            <div key={index} className="badge badge-ghost text-green-500 font-semibold">
                                                #{tag}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="flex items-center gap-1">
                                    <CiLocationOn className="text-lg" />
                                    <p>Year of Publishing: <span className="">{yearOfPublishing}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 border-b-[1px] border-slate-300 pb-3">
                                <div className="flex items-center gap-1">
                                    <IoPeopleOutline className="text-lg" />
                                    <p>Publisher: {publisher}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <IoBookSharp />
                                    <p>Page {totalPages}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between md:justify-start lg:justify-start mt-3 md:gap-2 lg:gap-2">
                            <p className="badge badge-accent h-8 min-w-32">Category: {category}</p>
                            <p className="badge badge-accent h-8 min-w-24">Rating: {rating}</p>
                            <Link to={`book/${bookId}`}>
                                <p className="badge badge-accent h-8 min-w-24">
                                View Details
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;