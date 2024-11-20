import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
const Header = () => {
    return (
        <>
            {/* <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-fuchsia-500 shadow-lg">
            <div className="grid grid-cols-12 *:justify-center *:items-center navbar container mx-auto px-4">
              
                <div className="col-span-2">
                    <Link
                        to="/"
                        className="text-3xl p-3 font-extrabold text-white tracking-wide fancy-font"
                    >
                        Career<span className="text-lime-300">Field</span>
                    </Link>
                </div>

              
                <div className="hidden col-span-8 lg:flex space-x-4">
                    <Link className="text-white hover:text-yellow-300" to="/">
                        Home
                    </Link>
                    <Link className="text-white hover:text-yellow-300" to="/services">
                        Services
                    </Link>
                    <Link className="text-white hover:text-yellow-300" to="/profile">
                        My Profile
                    </Link>
                </div>

               
                <div className="col-span-2">
                    <img src={userIcon} alt="" />
                    <Link to="/auth/login" className="btn  btn-outline text-white">
                        Login
                    </Link>
                </div>
            </div>

          
            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                </ul>
            </div>
            </div> */}
            <div className="navbar bg-base-100 bg-gradient-to-r from-blue-500 via-teal-400 to-fuchsia-500  px-12 fixed top-0 w-full transition-all duration-300 shadow-md">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link className="text-white hover:text-yellow-300" to="/">
                                Home
                            </Link>
                            <Link className="text-white hover:text-yellow-300" to="/services">
                                Services
                            </Link>
                            <Link className="text-white hover:text-yellow-300" to="/serviceDetails">
                               Service Details
                            </Link>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="text-3xl p-3 font-extrabold text-white tracking-wide fancy-font"
                    >
                        Career<span className="text-lime-300">Field</span>
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className="text-white hover:text-yellow-300" to="/">
                            Home
                        </Link>
                        <Link className="text-white hover:text-yellow-300 px-6" to="/services">
                            Services
                        </Link>
                        <Link className="text-white hover:text-yellow-300" to="/serviceDetails">
                            Service Details
                        </Link>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <img src={userIcon} alt="" />
                    <Link to="/auth/login" className="btn btn-outline text-white">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;