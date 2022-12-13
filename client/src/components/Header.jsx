import React from "react";

function Header() {
    return (
        <div className="py-12 bg-gray-100 overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                <div className="w-full px-4">
                    <div className="mt-2 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                            <img className="rounded-lg " src="https://www.cdc.gov/training/images/1330x370_etsb-training_10-15.png?_=24719" alt="bg" />
                            <div className="mt-8 w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                                    Value Your Verity With Your Own Charity Portfolio
                                    </h1>
                            </div>
                            <div className="flex justify-center items-center mb-10 sm:mb-20">
                            <a href="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Sign Up
                            </a>
                            <a href="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Explore
                            </a>
                            </div>
                        </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>
    )
}

export default Header;
