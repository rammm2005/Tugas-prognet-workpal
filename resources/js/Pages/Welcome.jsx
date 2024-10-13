import { Link, Head } from '@inertiajs/react';
import * as React from 'react';
import { usePage } from '@inertiajs/react';
import Authenticated from '@/Components/Layouts/User/UserLayout';
import SwiperPromo from '@/Components/Swiper/PromoSwiper';
import { CategoryCard } from '@/Components/Card/CategoryCard';
import { Trust } from '@/Components/TrustUs/Trust';
import PopularService from '@/Components/Swiper/PopularService';
import ImageGrid from '@/Components/Card/GaleryWorkpal';
import { JoinWorkpal } from '@/Components/Card/JoinWorkpal';

export default function Welcome({ laravelVersion, phpVersion }) {
    const { auth, flash } = usePage().props;
    const isAuthenticated = auth && auth.user;
    return (
        <>
            <Head title="Home" />
            <Authenticated user={isAuthenticated ? auth.user.data : null}>
                <main className='w-full max-w-full px-16'>
                    <SwiperPromo />
                    <PopularService />
                    <Trust />
                    <CategoryCard />
                    <ImageGrid />
                    <JoinWorkpal />
                </main>
            </Authenticated>

        </>

    );
}
