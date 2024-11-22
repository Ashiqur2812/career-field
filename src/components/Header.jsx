// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import userIcon from '../assets/user.png';
// import { AuthContext } from '../provider/AuthProvider';

// const Header = () => {
//     const { user, logOut } = useContext(AuthContext);

//     const links = <>
//         <NavLink className="text-black lg:text-white hover:text-yellow-300 mr-4" to="/">
//             Home
//         </NavLink>
//         <NavLink className="text-black lg:text-white hover:text-yellow-300 mr-4" to="/about">
//             About
//         </NavLink>
        
//         {
//             user?.email && <>
//                 <NavLink className="text-black lg:text-white hover:text-yellow-300 mr-4" to='/myProfile'>MyProfile</NavLink>
//                 <NavLink className="text-black lg:text-white hover:text-yellow-300" to='/careerInsights'>CareerInsights</NavLink>
//             </>
//         }
//     </>;

//     return (
//         <>
//             <div className="navbar bg-base-100 bg-gradient-to-r from-blue-500 to-purple-500 z-50 px-12 fixed top-0 w-full transition-all duration-300  backdrop-blur-2xl">
//                 <div className="navbar-start ">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            
//                             {links}
//                         </ul>
//                     </div>
//                     <Link
//                         to="/"
//                         className="text-3xl p-3 font-extrabold text-white tracking-wide fancy-font"
//                     >
//                         Career<span className="text-lime-300">Field</span>
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden  lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {links}
//                     </ul>
//                 </div>
//                 <div className="navbar-end gap-4">
//                     {
//                         user && user?.email ? <>
//                             <img className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
//                             <div className='text-center text-base-100'>
//                                 <p>{user.displayName}</p>
//                                 <p>{user.email}</p>
//                             </div>
//                         </> : <img src={userIcon} alt="" />
//                     }

//                     {
//                         user && user?.email ? <button onClick={logOut} className='btn btn-outline text-white'>LogOut</button> : <Link to="/auth/login" className="btn btn-outline text-white">
//                             Login
//                         </Link>
//                     }
//                 </div>
//             </div>
//         </>
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
            <NavLink className="text-black lg:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/">
                Home
            </NavLink>
            <NavLink className="text-black lg:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/about">
                About
            </NavLink>
            {user?.email && (
                <>
                    <NavLink className="text-black lg:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/myProfile">
                        My Profile
                    </NavLink>
                    <NavLink className="text-black lg:text-white hover:text-yellow-300 block px-4 py-2 lg:inline-block" to="/careerInsights">
                        Career Insights
                    </NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-500 to-purple-500 z-50 px-6 md:px-12 fixed top-0 w-full backdrop-blur-2xl">
            <div className="flex justify-between items-center w-full">
                {/* Logo Section */}
                <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
                    Career<span className="text-lime-300">Field</span>
                </Link>

                {/* Dropdown Button for Mobile */}
                <div className="dropdown lg:hidden">
                    <button tabIndex={0} className="btn btn-ghost focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-white rounded-lg shadow-lg mt-3 w-52 right-0 absolute z-50"
                    >
                        {links}
                    </ul>
                </div>

                {/* Center Navigation for Large Screens */}
                <div className="hidden lg:flex space-x-6">
                    {links}
                </div>

                {/* User Info and Login/Logout */}
                <div className="flex items-center gap-4">
                    {user && user?.email ? (
                        <>
                            <img className="h-10 w-10 rounded-full" src={user.photoURL || userIcon} alt="User" />
                            <div className="text-white text-sm text-center hidden md:block">
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
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
            </div>
        </div>
    );
};

export default Header;
