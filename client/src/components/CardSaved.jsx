import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Modal from "./Modal";
import { UNSAVE_CHARITY } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Card = () => {
  // usequery for get all chairities for login in user
  const { data } = useQuery(QUERY_ME);
  const charities = data.me?.charities || [];
  const [unSaveCharity] = useMutation(UNSAVE_CHARITY);
  const [formState, setFormState] = useState({ charityId: "" });

  const handleSubmit = async (event) => {
    // setting formstate variable for chairityId
    const { name, value } = event.target;
    // setting up form state value
    setFormState({ ...formState, [name]: value });

    try {
      const chairityData = await unSaveCharity({
        variables: {
          charityId: formState.charityId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center">
        {/* Filter Applied */}
        {charities.map((charity) => (
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
              {/* <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                {charity.categories[0].name}
              </span> */}
              <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {charity.name}
              </h5>
              <a
                href={charity.link}
                className="font-normal text-indigo-400 dark:text-gray-400"
              >
                Visit Site
              </a>
              <p className="font-normal text-xs text-gray-700 dark:text-gray-400">
                EIN: {charity.ein}
              </p>
              <p className="font-normal text-xs text-gray-700 dark:text-gray-400">
                Location: {charity.location}
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
                  Unsave
                </button>
                {/* TODO: Add a "donate" logic here to donate to right charity_ID */}
                <Link
                  to="/donation"
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  Donate
                </Link>
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
