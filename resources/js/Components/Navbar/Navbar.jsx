import { Link, useForm } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiChevronDown, FiClock, FiEye, FiShield, FiZap, FiActivity, FiSearch } from 'react-icons/fi';

export default function Navbar({ user }) {
    const { post, processing } = useForm();
    const [menuOpen, setMenuOpen] = useState(false);
    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState(user?.profile_picture || '');
    const placeholder = 'https://via.placeholder.com/96';
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleProductMenu = () => setProductMenuOpen(!productMenuOpen);
    const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

    useEffect(() => {
        setImgSrc(user?.profile_picture || '');
    }, [user]);

    const handleError = () => setImgSrc(placeholder);

    const handleLogout = () => {
        post(route('auth.user.logout'), {
            onSuccess: () => { },
            onError: (errors) => { },
        });
    };

    const getColor = (userId) => {
        const colors = ['#BF3B30', '#4B8E4B', '#2A2A8E', '#A45A2D', '#8E2A4B', '#3B3B3B', '#2A8E8E', '#5C4C3A', '#4B2A8E', '#8E5C2A'];
        const numericValue = parseInt(userId.replace(/-/g, '').substring(0, 8), 16);
        return colors[numericValue % colors.length];
    };

    const initials = user?.name.charAt(0).toUpperCase();

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchTerm);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="mx-auto flex flex-row max-w-full items-center justify-between py-2 px-10 lg:px-20" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Workpal</span>
                        <img className="h-20 w-auto" src="./assets/images/logo/logo.png" alt="Workpal Company" />
                    </a>
                </div>

                <div className="hidden lg:flex lg:flex-1 justify-center items-center mr-8">
                    <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-lg bg-white rounded-full shadow-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Telusuri Freelance Kami..."
                            className="border-2 border-slate-100 rounded-full py-3 px-5 pr-12 w-full focus:outline-none focus:ring-2 transition duration-200 text-gray-800 placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 p-2 rounded-full bg-green-600 hover:bg-green-700 focus:outline-none transition duration-200"
                        >
                            <FiSearch className="text-white h-5 w-5" />
                        </button>
                    </form>
                </div>



                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className={`lg:flex lg:gap-x-12 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                    {/* Product Menu */}
                    <div className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-x-1 mr-8 text-sm font-semibold leading-6 text-gray-900"
                            onClick={toggleProductMenu}
                        >
                            Jelajahi
                            <FiChevronDown className={`h-5 w-5 flex-none text-gray-400 transform ${productMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {productMenuOpen && (
                            <div className="absolute -right-9 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {/* Product Links */}
                                    <ProductLink icon={FiClock} title="Analytics" description="Get a better understanding of your traffic" />
                                    <ProductLink icon={FiEye} title="Engagement" description="Speak directly to your customers" />
                                    <ProductLink icon={FiShield} title="Security" description="Your customers’ data will be safe and secure" />
                                    <ProductLink icon={FiZap} title="Integrations" description="Connect with third-party tools" />
                                    <ProductLink icon={FiActivity} title="Automations" description="Build strategic funnels that will convert" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Link href="/freelance" className="text-sm font-semibold leading-6 text-gray-900 mr-8">
                    Daftar Freelance
                </Link>

                <div className='relative flex flex-row items-center gap-3'>
                    {user ? (
                        <>
                            {imgSrc ? (
                                <img
                                    src={imgSrc}
                                    alt={user.name}
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    onClick={toggleProfileMenu}
                                    onError={handleError}
                                />
                            ) : (
                                <div
                                    className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer"
                                    style={{ backgroundColor: getColor(user.id) }}
                                    onClick={toggleProfileMenu}
                                >
                                    <span className="text-white font-bold">{initials}</span>
                                </div>
                            )}
                            {profileMenuOpen && (
                                <div className="absolute right-0 top-16 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link href='' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {processing ? 'Logouting...' : 'Logout'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('auth.userlogin')}
                                className="py-2 px-6 rounded-md border-2 border-green-800 hover:bg-green-700 hover:text-white hover:border-slate-300 transition-all ease-in-out duration-300"
                            >
                                <span className="text-base font-semibold">Login</span>
                            </Link>
                            <Link
                                href={route('auth.userRegister')}
                                className="py-2 px-6 text-white rounded-md bg-green-700 border border-slate-200 hover:bg-green-800 transition-all ease-in-out duration-300"
                            >
                                <span className="text-base font-semibold">Register</span>
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="p-4 space-y-4">
                        <a href="#" className="block text-sm font-semibold text-gray-900">Home</a>
                        <a href="#" className="block text-sm font-semibold text-gray-900">About</a>
                        <a href="#" className="block text-sm font-semibold text-gray-900">Services</a>
                        <a href="#" className="block text-sm font-semibold text-gray-900">Contact</a>
                    </div>
                </div>
            )}
        </header>
    );
}

const ProductLink = ({ icon: Icon, title, description }) => (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <Icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
        </div>
        <div className="flex-auto">
            <a href="#" className="block font-semibold text-gray-900">
                {title}
                <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);
