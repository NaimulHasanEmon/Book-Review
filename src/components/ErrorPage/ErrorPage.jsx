import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Oppsss!!</p>
            <div>
                <Link to='/'>
                    <button className="btn btn-accent">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;