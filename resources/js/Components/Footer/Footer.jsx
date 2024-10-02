import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-slate-100 text-slate-900">
            <div className="max-w-full mx-auto py-10 px-6 lg:px-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-black font-bold text-lg mb-4">WorkPal</h3>
                        <p className="text-sm">
                            Address: 123 Main Street, City, Country
                        </p>
                        <p className="text-sm">
                            Phone: (123) 456-7890
                        </p>
                        <p className="text-sm">
                            Email: contact@yourcompany.com
                        </p>
                    </div>

                    <div>
                        <h3 className="text-black font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-black">Home</a></li>
                            <li><a href="#" className="hover:text-black">About</a></li>
                            <li><a href="#" className="hover:text-black">Services</a></li>
                            <li><a href="#" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-black">FAQs</a></li>
                            <li><a href="#" className="hover:text-black">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-black"><FiFacebook className="h-6 w-6" /></a>
                            <a href="#" className="hover:text-black"><FiTwitter className="h-6 w-6" /></a>
                            <a href="#" className="hover:text-black"><FiInstagram className="h-6 w-6" /></a>
                            <a href="#" className="hover:text-black"><FiLinkedin className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} WorkPal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
