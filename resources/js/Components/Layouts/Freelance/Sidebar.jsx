import React from 'react';
import { FiSettings, FiUsers, FiPackage, FiShoppingCart, FiTruck } from 'react-icons/fi';
import { BiBarChartAlt2, BiUser } from 'react-icons/bi';

const Sidebar = ({ user }) => {
    return (
        <aside className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start">
            <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
                <a href="https://www.loopple.com" className="transition-colors duration-200 ease-in-out">
                    <img alt="Logo" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg" className="inline" />
                </a>
            </div>

            <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

            <div className="flex items-center justify-between px-8 py-5">
                <div className="flex items-center mr-5">
                    <img className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg" alt="avatar" />
                    <div className="ml-5">
                        <a href="javascript:void(0)" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">
                            Robert Jason
                        </a>
                        <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">SEO Manager</span>
                    </div>
                </div>
            </div>

            <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

            <div className="relative pl-3 my-5 overflow-y-scroll">
                <div className="flex flex-col w-full font-medium">
                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <BiBarChartAlt2 className="mr-2" />
                            Sales
                        </a>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <BiUser className="mr-2" />
                            Profile
                        </a>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <FiSettings className="mr-2" />
                            Settings
                        </a>
                    </div>

                    <div className="block pt-5 pb-[.15rem]">
                        <div className="px-4 py-[.65rem]">
                            <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">Applications</span>
                        </div>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <FiUsers className="mr-2" />
                            Users
                        </a>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <FiShoppingCart className="mr-2" />
                            Orders
                        </a>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <FiTruck className="mr-2" />
                            Track Order
                        </a>
                    </div>

                    <div className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                        <a href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                            <FiPackage className="mr-2" />
                            Products
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
