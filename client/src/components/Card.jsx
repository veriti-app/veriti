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
    <div>
    <div class="relative inline-block text-left">
      <label for="category">Choose a car:</label>
      <select onChange={(event)=> setCategory(event.target.value)} name="category" id="category">
      <option value="Healthcare">Healthcare</option>
      <option value="Disaster Relief">Disaster Relief</option>
      <option value="Environment">Environment</option>
      <option value="LGBTQ+">LGBTQ+</option>
      <option value="Animal Welfare">Animal Welfare</option>
      {/* add all in */}
      </select>
    </div>


    <div className="flex flex-row flex-wrap">
         {Filter(category).map((charity) => (
    <div type="card" data-modal-toggle="defaultModal" key={charity._id}>
        <Modal charityId={charity._id}/>
        <div>
     {/* Card */}
          <div className="max-w-sm w-96 rounded overflow-hidden shadow-lg">
              <img style={{ height: "200px" }} className="w-full rounded-t-lg object-cover" src={charity.imgLink} alt="" />
            <div className="p-5">
              <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                {charity.categories[0].name}
              </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {charity.name}
                </h5>
              <a href={charity.link} className="mb-3 font-normal text-indigo-400 dark:text-gray-400">Explore</a>
              <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                EIN: {charity.ein}
              </p>
              <Link
                to="/"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Save
              </Link>
              <Link
                to="/donation"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Donate
              </Link>
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