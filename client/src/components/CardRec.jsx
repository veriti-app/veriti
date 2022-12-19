import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, ALL_CHARITIES } from "../utils/queries";
import { SAVE_CHARITY } from "../utils/mutations";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";

const Card = () => {
  // Get logged in user charities
  const { data: userCharityData } = useQuery(QUERY_ME);
  const userCharityIdList = [];
  if (userCharityData !== undefined) {
    const userCharityIds = userCharityData.me?.charities || [];
    // create list for user chairityid
    for (var i = 0; i < userCharityIds.length; i++) {
      userCharityIdList.push(userCharityIds[i]._id);
    }
  }

  // Create object for save_charity mutation
  const [saveCharity] = useMutation(SAVE_CHARITY);
  const [formState, setFormState] = useState({ charityId: "" });
  const { data } = useQuery(ALL_CHARITIES);
  var charities = data?.charities || [];
  //Generate random 9 number from 1 to 49
  var arr = [];
  while (arr.length < 9) {
    var r = Math.floor(Math.random() * 49);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  // Filterd random 9 chairities from 49
  var filterCharities = [];
  arr.forEach(myFunction);
  function myFunction(arrIndex) {
    filterCharities.push(charities[arrIndex]);
  }

  const [category, setCategory] = useState("");

  // Todo : Future Implementation require
  // Saved chairity on backaend and displayed on user portfolio
  // const handleSubmit = async (event) => {
  //   // setting formstate variable
  //   const { name, value } = event.target;

  //   setFormState({ ...formState, [name]: value });
  //   try {
  //     const chairityData = await saveCharity({
  //       variables: { charityId: formState.charityId },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center justify-between space-y-4">
        {/* use map loop for chairities */}
        {filterCharities.map((charity) => (
          // Card
          <div
            type="card"
            data-modal-toggle="defaultModal"
            key={charity._id}
            className="max-w-sm w-96 rounded overflow-hidden shadow-lg rounded-lg"
          >
            {/* Image */}
            <img
              style={{ height: "200px" }}
              className="w-full rounded-t-lg object-cover"
              src={charity.imgLink}
              alt=""
            />
            {/* Text */}
            <div className="p-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                {charity.categories[0].name}
              </span>
              <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {charity.name}
              </h5>
              <a
                href={charity.link}
                className="font-normal text-indigo-400 dark:text-gray-400"
              >
                Visit Site
              </a>
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
                  // onClick={handleSubmit}
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  {/* Set value of button dynamically based on user chairity */}
                  {/* {userCharityIdList.includes(charity._id) ? "Saved" : "Save"} */}
                  Save
                </button>
                {/* TODO: Add a "donate" logic here to donate to right charity_ID */}
                {/* <Link
                  to="/donation"
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  Donate
                </Link> */}
                <button
                  id="donation"
                  value={charity._id}
                  name="chairityId"
                  // onClick={handleDonation}
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  Donate
                </button>
                {/* Modal Button */}
                <Modal charityId={charity._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
