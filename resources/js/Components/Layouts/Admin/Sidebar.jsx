import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaTachometerAlt, FaUsers, FaUserShield, FaCog, FaFileAlt } from "react-icons/fa";

export default function Sidebar({ sidebarOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform shadow-lg ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium mt-8">
                    <li>
                        <Link href={route('admin.index')} className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaTachometerAlt className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaUsers className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/roles" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaUserShield className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Roles</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  "
                            onClick={toggleDropdown}
                            aria-controls="dropdown-example"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 21"
                            >
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Product</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {isOpen && (
                            <ul id="dropdown-example" className="py-2 space-y-2">
                                <li>
                                    <Link
                                        href={route('categories.index')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                                    >
                                        Category
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                                    >
                                        Pekerjaan
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                                    >
                                        Jenis Pekerjaan
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  "
                                    >
                                        Skill & Level
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link href="/settings" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaCog className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Page Settings</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/reports" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaFileAlt className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Reports</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
