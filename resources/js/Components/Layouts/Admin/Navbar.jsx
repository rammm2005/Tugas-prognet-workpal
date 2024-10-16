import React, { useState } from "react";
import { useForm, Link } from "@inertiajs/react";

export default function Navbar({ toggleSidebar, user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { post } = useForm();

    const handleLogout = async () => {
        post(route('admin.logout'));
    }

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">

                        <button
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                        </button>

                        <Link href="#" className="flex ml-2">
                            <img
                                src="/assets/images/logo/logo.png"
                                className="h-16 mr-3"
                                alt="Logo"
                            />
                            <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
                        </Link>
                    </div>

                    <div className="relative flex items-center">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-14 h-14 rounded-full"
                                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.name}`}
                                alt="user"
                            />
                        </button>

                        {dropdownOpen && (
                            <div
                                className="absolute right-0 top-12 z-50 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                id="dropdown-user"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm text-gray-900">{user.name}</p>
                                    <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                                </div>
                                <ul className="py-1">
                                    <li>
                                        <Link href={route('admin.index')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={''} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
