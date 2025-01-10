import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-6xl w-full px-5">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
