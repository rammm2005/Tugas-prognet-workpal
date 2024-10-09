import React from "react";
import { Link } from "@inertiajs/react";
import { FaTachometerAlt, FaUsers, FaUserShield, FaCog, FaFileAlt } from "react-icons/fa";

export default function Sidebar({ sidebarOpen }) {
    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform shadow-lg ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/dashboard" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
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
                        <Link href="/settings" className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300">
                            <FaCog className="flex-shrink-0 w-5 h-5 text-gray-600 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Settings</span>
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
