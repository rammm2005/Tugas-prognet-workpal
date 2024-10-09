import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
// import usePage from '@inertiajs/react';

export default function Authenticated({ children, user }) {
    return (

        <>
            <div className='w-full'>
                <Navbar user={user} />
                {children}
                <Footer />
            </div>
        </>
    );
}
