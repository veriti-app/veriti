import { useQuery } from "@apollo/client";
import { SINGLE_CHARITY } from "../utils/queries";

const CardCheckOut = () => {
  let currentCharity = localStorage.getItem("current-charity");
  const { data, loading } = useQuery(SINGLE_CHARITY, {
    variables: { charityId: currentCharity },
  });
  const charity = data?.charity || [];
  console.log(charity);

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center text-black">
        <div type="card" data-modal-toggle="defaultModal" key={charity._id}>
          {/* Card */}
          <div className="m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              style={{ height: "200px" }}
              className="w-full rounded-t-lg object-cover"
              src={charity.imgLink}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {charity.name}
              </h5>
              <p className="mission mb-3 font-normal text-gray-700 dark:text-gray-400">
                EIN: {charity.ein}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCheckOut;
