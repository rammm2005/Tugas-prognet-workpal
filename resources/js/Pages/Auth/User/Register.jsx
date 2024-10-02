import { Head, Link, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { flash } = usePage().props;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
    });

    useEffect(() => {
        if (flash.notif || flash.errorFe) {
        }
    }, [flash.notif, flash.errorFe]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };


    const handleAuth = (provider) => {
        const redirectUrl = route('auth.provider.redirect', { provider });
        window.location.href = redirectUrl;
    };


    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    const handleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleRegister = (event) => {
        event.preventDefault();
        setPasswordMismatch('');

        if (data.password !== data.confirmPassword) {
            setPasswordMismatch('The Confirm password does not match with password.');
            setData('confirmPassword', '');
        } else {
            post(route('auth.userRegister'), {
                onSuccess: () => reset('password', 'confirmPassword', 'email', 'name'),
                onError: () => console.error('Error fetching data:', flash.errorFe)
            });
        }
    };

    return (
        <>
            <Head title='Register' />
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-slate-800 lg:max-w-4xl">
                <div
                    className="hidden bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
                    }}
                ></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                    </div>

                    <p className="mt-3 text-xl text-center text-slate-600 dark:text-slate-200">Welcome to Registration!</p>


                    {flash.notif && (
                        <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-400">
                            {flash.notif}
                        </div>
                    )}
                    {flash.errorFe && (
                        <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-400">
                            {flash.errorFe}
                        </div>
                    )}


                    <button
                        onClick={() => handleAuth('google')}
                        className="flex items-center justify-center w-full mt-4 text-slate-600 transition-colors duration-300 transform border rounded-lg dark:border-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600"
                    >
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </button>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-slate-600 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-slate-500 uppercase dark:text-slate-400 hover:underline">
                            or Register with email
                        </a>
                        <span className="w-1/5 border-b dark:border-slate-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleRegister}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 text-slate-700 bg-white border rounded-lg dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 text-slate-700 bg-white border rounded-lg dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200" htmlFor="password">
                                    Password
                                </label>
                                <button type="button" onClick={handlePasswordVisibility} className="text-slate-500">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <input
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 text-slate-700 bg-white border rounded-lg dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type={showPassword ? 'text' : 'password'}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-200" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <button type="button" onClick={handleConfirmPasswordVisibility} className="text-slate-500">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                value={data.confirmPassword}
                                onChange={handleInputChange}
                                className="block w-full px-4 py-2 text-slate-700 bg-white border rounded-lg dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                            />
                            {passwordMismatch && <p className="text-red-500 text-sm">{passwordMismatch}</p>}
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${processing ? 'bg-gray-400' : 'bg-slate-800'} rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50`}
                            >
                                {processing ? 'Processing...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <Link
                        href={route('auth.free.register')}
                        className="text-xs text-center text-slate-500 uppercase dark:text-slate-400 hover:underline"
                    >
                        Daftar menjadi Freelance ?
                    </Link>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-slate-600 md:w-1/4"></span>
                        <Link
                            href={route('auth.userlogin')}
                            className="text-xs text-center text-slate-500 uppercase dark:text-slate-400 hover:underline"
                        >
                            Already registered? Login
                        </Link>
                        <span className="w-1/5 border-b dark:border-slate-400 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
