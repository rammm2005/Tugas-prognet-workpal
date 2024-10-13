import React from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

const Navbar = ({ user }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="flex items-center space-x-4">
                <FiSearch className="text-gray-500 w-6 h-6 cursor-pointer" />
                <FiBell className="text-gray-500 w-6 h-6 cursor-pointer" />
                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
            </div>
        </nav>
    );
};

export default Navbar;
