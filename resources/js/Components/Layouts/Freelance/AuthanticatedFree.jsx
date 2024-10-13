import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AuthenticatedFreelance({ title, children, user }) {


    return (
        <>
            <Head title={title} />
            <div className="flex">
                <Sidebar user={user} />
                <div className="flex-1 ml-[250px] lg:ml-[300px]">
                    <Navbar user={user} />
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </>
    );
}
