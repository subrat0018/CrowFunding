import React from "react";
import { useLocation } from "react-router-dom";
import { newIcon, coin } from "../Assets";
const DriveDetails = () => {
  const location = useLocation();
  const state = location.state;
  if (!state) return;
  const imgUrl = state.imgUrl;
  const title = state.title;
  const story = state.story;
  const amountCollected = state.amountCollected;
  const targetAmount = state.targetAmount;
  const daysLeft = state.daysLeft;
  const ownerAddress = state.ownerAddress;
  return (
    <div className="flex justify-center mt-8 mb-16">
      <div className="w-8/12 h-8/12 flex flex-col justify-start bg-gray-100 rounded-3xl shadow-2xl">
        <div className="w-full h-3/5">
          <img
            className="w-full h-full m-auto rounded-tl-3xl rounded-tr-3xl"
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="flex flex-row items-center ml-2">
          <div className=" font-bold text-4xl ">{title}</div>
          <img className=" w-20 h-14" src={newIcon} alt="" />
        </div>
        <div className="flex flex-row justify-start mt-6 bg-gradient-to-r from-gray-200 to-gray-100">
          <div className="w-1/2 flex flex-col space-y-5  ml-2">
            <div>
              <div className="text-3xl font-semibold">Story</div>
              <p>{story}</p>
            </div>
            <div>
              <div className=" text-3xl font-semibold">Collected</div>
              <div className="flex flex-row space-x-1">
                <img className="w-4" src={coin} />
                <div>
                  {amountCollected} / {targetAmount}
                </div>
              </div>
            </div>
            <div>
              <div className=" text-3xl font-semibold">Days Left</div>
              <div>{daysLeft}</div>
            </div>
            <div className="w-full">
              <button
                type="button"
                class=" w-1/3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Save
              </button>
              <button
                type="button"
                class=" w-1/3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Donate
              </button>
            </div>
          </div>
          <div className="w-1/2 ml-2 flex flex-col space-y-5">
            {/* <div></div> */}
            <div>
              <div className=" text-3xl font-semibold">Creator</div>
              <div>{ownerAddress}</div>
            </div>

            <div>
              <div className=" text-3xl font-semibold">Donors</div>
              <div className="mb-2 ">List of Donors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveDetails;
