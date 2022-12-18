import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ALL_CHARITIES } from "../utils/queries";
import { SAVE_CHARITY } from "../utils/mutations";
import Modal from "./Modal";

const Card = () => {
  // Create object for save_charity mutation
  const [saveCharity] = useMutation(SAVE_CHARITY);
  const [formState, setFormState] = useState({charityId: "",});
  const { data } = useQuery(ALL_CHARITIES);
  const charities = data?.charities || [];
  const [category, setCategory] =useState("");
  
  function Filter(category) {
    if (category) {
      let newarr = charities.filter(
        (char) => char.categories[0].name === category
      );
      return newarr;
    } else {
      return charities;
    }
  }

  const handleSubmit = async (event) => {
    // setting formstate variable
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
    try {
      const chairityData = await saveCharity({
        variables: { charityId: formState.charityId },
      });

      if (chairityData.data) {
        document.getElementById(event.target.id).textContent = "Saved";
        //storing chairity id key and button state value in local storage
        localStorage.setItem(event.target.id, "Saved");
      } else {
        document.getElementById(event.target.id).textContent = "Save";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>


    <div className="flex flex-row flex-wrap justify-center">
      {/* Filter Applied */}
      {Filter(category).map((charity) => (
        // Card
          <div type="card" data-modal-toggle="defaultModal" key={charity._id} className="max-w-sm w-96 rounded overflow-hidden shadow-lg rounded-lg">
            {/* Image */}
            <img style={{ height: "200px" }} className="w-full rounded-t-lg object-cover" src={charity.imgLink} alt="" />
            {/* Text */}
            <div className="p-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                {charity.categories[0].name}
                </span>
              <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {charity.name}
                </h5>
              <a href={charity.link} className="font-normal text-indigo-400 dark:text-gray-400">Visit Site</a>
              <p className="mb-8 font-normal text-xs text-gray-700 dark:text-gray-400">
                EIN: {charity.ein}
                </p>
            {/* CTAs */}
              <div className="flex flex-row py-2">
                {/* Save Button */}
                <button
                      id={charity._id}
                      value={charity._id}
                      name="charityId"
                      onClick={handleSubmit}
                      className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                    >
                      {/* Checking charityId is available in local storage or not based on that setting button value */}
                      {localStorage.getItem(charity._id) !== null
                        ? "Saved"
                        : "Save"}
                    </button>
                {/* TODO: Add a "donate" logic here to donate to right charity_ID */}
                <Link
                to="/donation"
                className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                  >Donate</Link>
                {/* Modal Button */}
                <Modal charityId={charity._id}/>
                  </div>
              </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default Card;