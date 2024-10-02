import { Link, Head } from '@inertiajs/react';
import * as React from 'react';
import { usePage } from '@inertiajs/react';
import Authenticated from '@/Components/Layouts/User/UserLayout';

export default function Welcome({ laravelVersion, phpVersion }) {
    const { auth, flash } = usePage().props;
    const isAuthenticated = auth && auth.user;
    return (
        <>
            <Head title="Home" />
            <Authenticated user={isAuthenticated ? auth.user.data : null}>
                <main className='w-full max-w-full px-16'>
                    Halo Guys
                </main>
            </Authenticated>

        </>

    );
}
