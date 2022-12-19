import React, { useState } from "react";
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

  // When user click on unsave button chairity is removed from user
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

  const handleDonation = async (event) => {
    localStorage.setItem("current-charity", event.target.value);
    window.location.replace("/donation");
  };

  return (
    <div>
      <div className=" flex flex-row flex-wrap gap-8 justify-center">
        {/* Filter Applied */}
        {charities.map((charity) => (
          // Card
          <div
            type="card"
            data-modal-toggle="defaultModal"
            key={charity._id}
            className="max-w-sm w-96 overflow-hidden shadow-lg rounded-lg"
          >
            {/* Image */}
            <img
              style={{ height: "200px" }}
              className="w-full rounded-t-lg object-cover"
              src={charity.imgLink}
              alt=""
            />
            {/* Text */}
            <div className="p-4 h-80 flex flex-col justify-between">
              <div>
                <h5 className="flex flex-wrap mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  {charity.location}
                </p>
              </div>
              {/* CTAs */}
              <div className="flex flex-col md:flex-row lg:flex-row pb-4 justify-center">
                <div className="flex flex-row">
                  {/* Save Button */}
                  <button
                    id={charity._id}
                    value={charity._id}
                    name="charityId"
                    onClick={handleSubmit}
                    className="py-3 md:py-4 lg:py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                  >
                    Unsave
                  </button>

                  <button
                    id="donation"
                    value={charity._id}
                    name="chairityId"
                    onClick={handleDonation}
                    className="py-3 md:py-4 lg:py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                  >
                    Donate
                  </button>
                </div>
                {/* Modal Button */}
                <div>
                  <Modal charityId={charity._id} />
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
