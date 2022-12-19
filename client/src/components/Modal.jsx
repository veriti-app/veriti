import React from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_CHARITY } from "../utils/queries";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const id = props.charityId;
  console.log("charity id", id);
  const { data } = useQuery(SINGLE_CHARITY, {
    variables: { charityId: id },
  });
  console.log("data", data)
  const charity = data?.charity || [];

  return (
    <>
      <button
        className="bg-indigo-100 text-indigo-800 active:bg-indigo-200 font-bold text-sm px-4 rounded-lg outline-none focus:outline-none mr-2 mb-2 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Explore
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my- mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {charity.name}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {charity.mission}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}