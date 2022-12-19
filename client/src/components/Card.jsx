import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME, ALL_CHARITIES } from "../utils/queries";
import { SAVE_CHARITY } from "../utils/mutations";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

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
  const charities = data?.charities || [];
  const [category, setCategory] = useState("");

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

  // Saved chairity on backaend and displayed on user portfolio
  const handleSubmit = async (event) => {
    // setting formstate variable
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
    try {
      const chairityData = await saveCharity({
        variables: { charityId: formState.charityId },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDonation = async (event) => {
    console.log("called", event.target.getAttribute("data-charityId"));
    // targeting the data atrribute for charityId
    let currentCharityId = event.target.getAttribute("data-charityId");
    // setting to local storage (key, value)
    localStorage.setItem("current-charity", currentCharityId);

    //window.location.replace("/donation");
  };

  return (
    <div>
      <div className="flex flex-col space-y-2 py-4">
        <label for="category" className="text-grey-600 font-medium">
          Choose a category
        </label>
        <select
          onChange={(event) => setCategory(event.target.value)}
          name="category"
          id="category"
          className="rounded-lg bg-white text-indigo-700 font-bold"
        >
          <option value="">All</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Disaster Relief">Disaster Relief</option>
          <option value="Environment">Environment</option>
          <option value="LGBTQ+">LGBTQ+</option>
          <option value="Animal Welfare">Animal Welfare</option>
          <option value="Education Services">Education Services</option>
          <option value="Social/Human Rights">Social/Human Rights</option>
          <option value="Legal Services">Legal Services</option>
          <option value="Economic Development">Economic Development</option>
          <option value="Mental Healthcare">Mental Healthcare</option>
          <option value="Refugees/Immigration">Refugees/Immigration</option>
          <option value="Public Safety">Public Safety</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap justify-center justify-between space-y-6">
        {/* Filter Applied */}
        {Filter(category).map((charity) => (
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
                  onClick={handleSubmit}
                  className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                >
                  {/* Set value of button dynamically based on user chairity */}
                  {userCharityIdList.includes(charity._id) ? "Saved" : "Save"}
                </button>
                {/* Data attribute data-charityId, a way to save data within elements*/}
                {/* Added Link button to route donation page*/}
                <Link to="/donation">
                  <button
                    onClick={handleDonation}
                    className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-indigo-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-indigo-700 dark:hover:bg-gray-700"
                    data-charityId={charity._id}
                  >
                    Donate
                  </button>
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
