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
        <div className="navbar backdrop-blur-xl bg-white/20 shadow-lg px-6 py-4 sticky top-0 z-50 border-b border-white/10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-white/10 transition-colors">
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
                        className="menu menu-sm dropdown-content backdrop-blur-xl bg-white/30 rounded-2xl z-[1] mt-3 w-52 p-4 shadow-xl border border-white/20">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <motion.div 
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img className='w-8 lg:w-12' src={Logo} alt="Jobs Portal Logo" />
                        <h3 className='text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>EclipseHire</h3>
                    </motion.div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 lg:gap-4">
                {user ? (
                    <motion.button 
                        className="backdrop-blur-md bg-gradient-to-r from-blue-600 to-blue-700/70 text-white px-2 py-1 text-xs lg:px-6 lg:py-3 lg:text-base rounded-full shadow-lg hover:shadow-xl transition-all font-medium border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </motion.button>
                ) : (
                    <>
                        <motion.button
                            className="backdrop-blur-md btn btn-sm lg:btn-md text-[10px] lg:text-sm relative bg-blue-600 border-white/10 px-2 py-0.5 lg:px-4 lg:py-2 text-white uppercase cursor-pointer transition-all duration-300 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        >
                            <Link to="/register" className="font-medium">Register</Link>
                        </motion.button>
                        
                        <motion.button
                            className="backdrop-blur-md btn btn-sm lg:btn-md text-[10px] lg:text-sm relative bg-blue-600 border-white/10 px-2 py-0.5 lg:px-4 lg:py-2 text-white uppercase cursor-pointer transition-all duration-300 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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