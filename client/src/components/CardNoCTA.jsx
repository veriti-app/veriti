import { useQuery } from "@apollo/client";
import { ALL_CHARITIES } from "../utils/queries";

const CardNoCTA = () => {
  const { data } = useQuery(ALL_CHARITIES);
  const charities = data?.charities || [];

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center">
        {charities
          .filter((item, idx) => idx < 3)
          .map((charity) => (
            <div type="card" data-modal-toggle="defaultModal" key={charity._id}>
              {/* Card */}
              <div className="m-5 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image */}
                <img
                  style={{ height: "200px" }}
                  className="w-full rounded-t-lg object-cover"
                  src={charity.imgLink}
                  alt=""
                />
                {/* Text */}
                <div className="p-5">
                  <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                    {charity.categories[0].name}
                  </span>
                  <h5 className="mb-2 sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                    {charity.name}
                  </h5>
                  <p className="mission font-normal text-gray-700 dark:text-gray-400 sm:text-sm md:text-base lg:text-base ">
                    {charity.mission.substring(0, 128)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardNoCTA;
