import sidebar from "./sidebar";
// import usePage from '@inertiajs/react';

export default function Authenticated({ children, user }) {
    return (

        <>
            <div className='w-full'>
               <sidebar>
                {children}
               </sidebar>
            </div>
        </>
    );
}
