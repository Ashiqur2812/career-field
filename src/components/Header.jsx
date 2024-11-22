// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import userIcon from '../assets/user.png';
// import { AuthContext } from '../provider/AuthProvider';

// const Header = () => {
//     const { user, logOut } = useContext(AuthContext);

//     const links = (
//         <>
//             <NavLink className="text-black md:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/">
//                 Home
//             </NavLink>
//             <NavLink className="text-black md:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/about">
//                 About
//             </NavLink>
//             {user && (
//                 <>
//                     <NavLink className="text-black md:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/myProfile">
//                         My Profile
//                     </NavLink>
//                     <NavLink className="text-black md:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/careerInsights">
//                         Career Insights
//                     </NavLink>
//                 </>
//             )}
//         </>
//     );

//     return (
//         <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-500 px-6 md:px-12 fixed top-0 w-full z-50 backdrop-blur-2xl">
//             <div className="navbar-start flex items-center justify-between w-full lg:w-auto">
//                 {/* Logo */}
//                 <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
//                     Career<span className="text-lime-300">Field</span>
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <div className="dropdown relative lg:hidden">
//                     <button tabIndex={0} className="btn btn-ghost">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                     {/* Dropdown Menu */}
//                     <ul
//                         tabIndex={0}
//                         className="menu dropdown-content absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-lg text-gray-800 z-50"
//                     >
//                         {links}
//                     </ul>
//                 </div>
//             </div>

//             {/* Center links for larger screens */}
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal space-x-6">{links}</ul>
//             </div>

//             {/* User info and login/logout */}
//             <div className="navbar-end flex items-center gap-4">
//                 {user && user?.email ? (
//                     <>
//                         <img className="h-12 w-12 rounded-full" src={user.photoURL || userIcon} alt="User Profile" />
//                         <div className="sm:block md:text-white text-black text-sm text-center">
//                             <div><p>{user?.displayName}</p></div>
//                             <div> <p>{user?.email}</p></div>
//                         </div>
//                         <button onClick={logOut} className="btn btn-outline text-white">
//                             Log Out
//                         </button>
//                     </>
//                 ) : (
//                     <Link to="/auth/login" className="btn btn-outline text-white">
//                         Login
//                     </Link>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Header;



import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
           <div className=''>
                <NavLink className="text-black md:text-white hover:text-yellow-300 px-4 py-2 block lg:inline-block" to="/">
                    Home
                </NavLink>
                <NavLink className="text-black md:text-white hover:text-yellow-300 px-4 py-2 block lg:inline-block" to="/about">
                    About
                </NavLink>
                {user && (
                    <>
                        <NavLink className="text-black md:text-white hover:text-yellow-300 px-4 py-2 block lg:inline-block" to="/myProfile">
                            My Profile
                        </NavLink>
                        <NavLink className="text-black md:text-white hover:text-yellow-300 px-4 py-2 block lg:inline-block" to="/careerInsights">
                            Career Insights
                        </NavLink>
                    </>
                )}
           </div>
        </>
    );

    return (
        <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-500 px-6 md:px-12 py-5 fixed top-0 w-full z-50 backdrop-blur-2xl flex items-center justify-between ">
            <div className="navbar-start flex items-center w-auto">
                {/* Logo */}
                <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
                    Career<span className="text-lime-300">Field</span>
                </Link>
            </div>

            {/* Centered Links */}
            <div className="hidden lg:flex flex-grow justify-center">
                <ul className="flex space-x-8">{links}</ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden dropdown">
                <button tabIndex={0} className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul tabIndex={0} className="menu dropdown-content absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-lg text-gray-800 z-50">
                    {links}
                </ul>
            </div>

            {/* User info and login/logout */}
            <div className="navbar-end flex items-center gap-4">
                {user && user?.email ? (
                    <>
                        <img className="h-12 w-12 rounded-full" src={user.photoURL || userIcon} alt="User Profile" />
                        <div className="hidden md:block text-white text-center">
                            <p>{user?.displayName}</p>
                            <p className="text-sm text-gray-200">{user?.email}</p>
                        </div>
                        <button onClick={logOut} className="btn btn-outline text-white">
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/auth/login" className="btn btn-outline text-white">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
