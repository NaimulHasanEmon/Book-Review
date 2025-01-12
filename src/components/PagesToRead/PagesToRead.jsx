import { useLoaderData } from "react-router-dom";
import PagesToReadChart from "../PagesToReadChart/PagesToReadChart";

const PagesToRead = () => {
    const allData = useLoaderData()

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