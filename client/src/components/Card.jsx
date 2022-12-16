import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ALL_CHARITIES } from "../utils/queries";
import Modal from "./Modal"; 


const Card = () => {
  const { loading, data } = useQuery(ALL_CHARITIES);
  const charities = data?.charities || [];
  const [category, setCategory] =useState("");
  function Filter (category){

    if(category){
      let newarr = charities.filter(char=> char.categories[0].name === category)
      return newarr
    } else {
      return charities
    }
  }
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-4 space-y-4">
         {charities.map((charity) => (
    <div type="card" data-modal-toggle="defaultModal" key={charity._id}>
        <Modal charityId={charity._id}/>
        <div>
     {/* Card 1 */}
          <div className="max-w-sm w-96 rounded overflow-hidden shadow-lg rounded-lg">
              <img style={{ height: "200px" }} className="w-full rounded-t-lg object-cover" src={charity.imgLink} alt="" />
            <div className="p-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                Healthcare
              </span>
                <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {charity.name}
                </h5>
              <a href={charity.link} className="font-normal text-indigo-400 dark:text-gray-400">Visit Site</a>
              <p className="mb-8 font-normal text-xs text-gray-700 dark:text-gray-400">
                EIN: {charity.ein}
              </p>
              <div className="flex flex-row py-2">
                <Link
                  to="/"
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Save
                </Link>
                <Link
                  to="/donation"
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
     ))}
     </div>
    </div>
  );
};

export default Card;