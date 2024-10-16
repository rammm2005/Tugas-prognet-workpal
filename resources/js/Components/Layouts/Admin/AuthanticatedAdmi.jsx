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
            <Navbar toggleSidebar={toggleSidebar} user={user} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className={`pt-20 transition-all ${sidebarOpen ? 'relative mt-10 ml-64 px-4' : 'relative mt-10 ml-4 px-4'}`}>
                {children}
            </div>
        </>
    );
}
