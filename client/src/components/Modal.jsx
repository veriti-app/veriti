import React from "react";

const Modal = () => {
    return (
<div>

{/* Modal toggle */}
<button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
  Charity Name
</button>

{/* Main modal */}
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-3xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

{/* Modal Header */}
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    CDC Foundation
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="top-left-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>

{/* Modal content */}
            {/* Column 1 */}
            <div className="flex flex-row">
                <div className="m-8"> 
                    <p class="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                    <a href='https://www.cdcfoundation.org/' target='blank '>CDC.org</a>
                    </p>
                    <p class="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                        Atlanta GA
                    </p>
                    <p class="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                        EIN: 58-2106707
                    </p>
                    <div className="my-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        Healthcare
                    </span>
                    </div>
                <div class="flex items-center space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Donate</button>
                </div>
                </div>

            {/* Column 2 */}
            <div className="bg-gray-200 rounded-br-lg">
                <div class="m-8">
                    <p class="text-base leading-relaxed text-black dark:text-gray-400">
                    The CDC Foundation helps the Centers for Disease Control and Prevention (CDC) save and improve lives by unleashing the power of collaboration between CDC, philanthropies, corporations, organizations and individuals to protect the health, safety and security of America and the world. The CDC Foundation is the go-to nonprofit authorized by Congress to mobilize philanthropic partners and private-sector resources. 
                    </p>
                </div>
                </div>

            </div>
        </div>
    </div>
</div>

</div>
    ); 
}

export default Modal; 