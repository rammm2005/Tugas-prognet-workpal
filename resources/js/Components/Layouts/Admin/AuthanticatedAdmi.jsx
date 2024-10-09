import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function AuthenticatedAdmin({ title, children, user }) {
    // State to manage sidebar visibility
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <Head title={title} />
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className={`ml-64 pt-20 transition-all ${sidebarOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </>
    );
}
