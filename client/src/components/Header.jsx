import React, { useState } from "react";

function Header() {
    const [show, setShow] = useState(false);
    return (
        <div className="py-12 bg-gray-100 overflow-y-hidden">
            {/* Code block starts */}
            <dh-component>
                <div className="w-full px-4">
                    <div className="mt-2 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                            <img className="rounded-lg " src="https://www.cdc.gov/training/images/1330x370_etsb-training_10-15.png?_=24719" alt="bg" />
                            <div className="mt-8 w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">The Freedom to Create the Pages You Want</h1>
                            </div>
                            <div className="flex justify-center items-center mb-10 sm:mb-20">
                                <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                                <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                            </div>
                        </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>
    )
}

export default Header;