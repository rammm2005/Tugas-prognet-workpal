import React from 'react';
import AuthenticatedFreelance from '@/Components/Layouts/Freelance/AuthanticatedFree';

const Dashboard = () => {

    return (
        <AuthenticatedFreelance title='Freelance Dashboard'>
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-medium">Sales Overview</h2>
                        <p className="text-gray-600">View your sales progress here.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-medium">Profile Overview</h2>
                        <p className="text-gray-600">Manage your profile settings.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-medium">Orders</h2>
                        <p className="text-gray-600">Check your order status.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-medium">Products</h2>
                        <p className="text-gray-600">Manage your product listings.</p>
                    </div>
                </div>
            </div>
        </AuthenticatedFreelance>
    );
};

export default Dashboard;
