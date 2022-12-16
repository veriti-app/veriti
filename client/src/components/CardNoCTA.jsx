import React from "react";


const CardNoCTA = () => {
    return ( 
        <div type="card" data-modal-toggle="defaultModal">
            <div className="flex flex-row flex-wrap">
                {/* Card 1 */}
                <div className="mx-1 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="https://www.cdc.gov/stem/image/CMDDC.png?_=40466" alt="" />
                    </a>
                    <div className="p-5">
                        <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                            Healthcare
                            </span>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                                </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardNoCTA;