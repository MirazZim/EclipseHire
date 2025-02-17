import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Logo from '../../assets/JobsLogo.png'
import { motion } from "framer-motion";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successfully Sign Out')
            })
            .catch(error => {
                console.log('failed to sign out')
            })
    }

    const links = <>
        <li><NavLink to="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</NavLink></li>
        <li><NavLink to="/MyApplications" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">My Applications</NavLink></li>
        <li><NavLink to="/addJob" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">Add Job</NavLink></li>
        <li><NavLink to="/MyPostedJobs" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">My Posted Jobs</NavLink></li>
    </>

    return (
        <div className="navbar backdrop-blur-md bg-white/80 shadow-sm px-6 py-4 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-100 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600"
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
                        className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-lg rounded-2xl z-[1] mt-3 w-52 p-4 shadow-xl border border-gray-100">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <motion.div 
                        className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img className='w-12' src={Logo} alt="Jobs Portal Logo" />
                        <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>EclipseHire</h3>
                    </motion.div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <motion.button 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all font-medium"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </motion.button>
                ) : (
                    <>
                        <motion.button
                            className="btn text-sm relative bg-blue-600 border-none px-4 py-2 text-white uppercase cursor-pointer transition-all duration-500 ease-in-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#eeede9] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:delay-500 hover:before:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0 after:w-full after:bg-black after:transition-all after:duration-400 after:ease-in-out after:-z-10 hover:after:h-full hover:after:delay-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        >
                            <Link to="/register" className="font-medium">Register</Link>
                        </motion.button>
                        
                        <motion.button
                            className="btn text-sm relative bg-blue-600 border-none px-4 py-2 text-white uppercase cursor-pointer transition-all duration-500 ease-in-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#eeede9] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:delay-500 hover:before:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0 after:w-full after:bg-black after:transition-all after:duration-400 after:ease-in-out after:-z-10 hover:after:h-full hover:after:delay-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        >
                            <Link to="/signIn" className="font-medium">Sign In</Link>
                        </motion.button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;