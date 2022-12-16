import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { SINGLE_CHARITY } from "../utils/queries";

const Modal = (props) => {
    const { loading, data } = useQuery(SINGLE_CHARITY, {
        variables: {charityId: props.charityId}
    });
    const charity = data?.charities || [];
    console.log(data);
    console.log(props);
    return (
<div>
    {/* Main modal */}
<div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">

{/* {charities.map((charity) => ( */}
     <div className="relative w-full h-full max-w-2xl md:h-auto">
     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

{/* Modal Header */}
         <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
             <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                 {charity.name}
             </h3>
             <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 <span className="sr-only">Close modal</span>
             </button>
         </div>

{/* Modal content */}
         {/* Column 1 */}
         <div className="flex flex-row">
             <div className="p-8 bg-gray-200 rounded-bl-lg"> 
                 <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                 <Link to={charity.link} target='_blank'>Website</Link>
                 </p>
                 <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                     {charity.location}
                 </p>
                 <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                    EIN: {charity.ein}
                 </p>
                 <div className="my-3">
                 <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                     {charity.categories}
                 </span>
                 </div>
             <div className="flex items-center space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                 <Link to="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                         Save
                     </Link>
                 <Link to="/donation" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                         Donate
                         </Link>
             </div>
             </div>

         {/* Column 2 */}
         <div className="p-8">
                 <div>
                 <p className="text-base leading-relaxed text-black dark:text-gray-400">
                 {charity.mission}
                 </p>
                 </div>
         </div>

         </div>
     </div>
 </div>
{/* ))} */}
   
</div>

</div>
); 
};

export default Modal; 