import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBooks'>Listed Books</NavLink></li>
        <li><NavLink to='/pagesToRead'>Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <RiMenu4Fill className="text-2xl"/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow">
                            {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-2xl Project-Title">Book Vibe
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <div>
                    <button className="btn bg-green-500 text-white text-sm md:text-lg lg:text-lg">Sign In</button>
                </div>
                <div>
                    <button className="btn bg-sky-400 opacity-85 text-white text-sm md:text-lg lg:text-lg">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;