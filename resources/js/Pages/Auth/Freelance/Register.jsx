import React from 'react';
import { Head, Link } from '@inertiajs/react';

const RegisterFreelancer = () => {
    return (
        <>
            <Head title='Rgister Freelance' />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                    <div className="text-center">
                        <img src="https://merakiui.com/images/logo.svg" alt="Logo" className="w-12 h-auto mx-auto" />
                        <h2 className="mt-4 text-3xl font-bold text-gray-800">Register as Freelancer</h2>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300">
                            Register
                        </button>

                        <div className="text-center text-gray-600">or sign up with</div>

                        {/* <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300">
                        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        </svg>
                        <span>Sign up with Google</span>
                    </button> */}

                        <p className="text-center text-gray-600">
                            Already have an account?{' '}
                            <Link href={route('auth.freeloginng')} className="text-blue-500 hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default RegisterFreelancer;
