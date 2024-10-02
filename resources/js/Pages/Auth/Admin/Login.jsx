import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function AdminLogin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <Head title="Admin Log in" />

            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                {status && (
                    <div className="mb-4 text-sm text-green-600 font-medium">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            autoComplete="username"
                        />
                        {errors.email && (
                            <span className="text-red-600 text-sm mt-1">{errors.email}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            autoComplete="current-password"
                        />
                        {errors.password && (
                            <span className="text-red-600 text-sm mt-1">{errors.password}</span>
                        )}
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        {canResetPassword && (
                            <a
                                href={route('password.request')}
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        )}

                        <button
                            type="submit"
                            className={`ml-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${processing ? 'opacity-50' : ''
                                }`}
                            disabled={processing}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
