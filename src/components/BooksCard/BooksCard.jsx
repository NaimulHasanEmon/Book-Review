import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BooksCard = ({book}) => {
    const{bookId, bookName, author, image, rating, category, tags} = book
    return (
        <Link to={`book/${bookId}`}>
            <div className="card border shadow-xl mx-4 p-4">
                <div className="bg-base-200 flex justify-center items-center min-h-48 rounded-xl mb-3">
                    <img
                    className="h-36"
                    src={image}
                    alt={bookName} />
                </div>
                <div className="">
                    <div className="border-b-2 border-dashed pb-2">
                        <div className="flex gap-2">
                            {
                                tags.map((tag, index) =>
                                    <div key={index} className="badge badge-ghost text-green-500 font-semibold">
                                        #{tag}
                                    </div>
                                )
                            }
                        </div>
                        <p className="text-2xl font-serif mt-3 mb-1">{bookName}</p>
                        <p>By: <span className="font-mono">{author}</span></p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm">
                            {category}
                        </p>
                        <div className="flex items-center">
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;