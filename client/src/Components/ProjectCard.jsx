import React from "react";
import Web3 from "web3";
let web3 = new Web3(Web3.givenProvider);
const ProjectCard = (drive) => {
  const today = new Date();
  const secondsPassed = today.getTime();
  const secondsInADay = 24 * 60 * 60 * 1000;
  const left =
    (parseInt(web3.utils.hexToNumber(drive.props.deadline._hex)) -
      parseInt(secondsPassed)) /
    secondsInADay;
  if (left <= 0) return;
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md shadow-2xl cursor-pointer border border-green-300">
      <div className="w-11/12 h-11/12 mt-4 mb-4">
        <img className="w-72 h-56 m-auto" src={drive.props.imgurl} alt="" />
      </div>
      <div className="w-4/5 flex ml-15 flex-col mb-4">
        <h2 className=" text-[#238628] font-bold text-xl ">
          {drive.props.title}
        </h2>
        <p className="text-[#9fe488]">
          {drive.props.description.substr(0, 50)}
        </p>
      </div>
      <div className="w-4/5 flex ml-15 flex-row justify-between">
        <div className="flex flex-col">
          <h2 className=" text-[#238628] font-bold text-xl ">
            {parseFloat(drive.props.amountCollected._hex)}
          </h2>
          <span className=" text-[#9fe488]">{`Raised of ${web3.utils
            .fromWei(drive.props.targetAmount._hex)
            .slice(0, 4)}`}</span>
        </div>
        <div className="flex flex-col">
          <h2 className=" text-[#238628] font-bold text-xl ">
            {parseInt(left)}
          </h2>
          <span className="text-[#9fe488]">Days Left</span>
        </div>
      </div>
      <div className="text-xs m-2 text-[#9fe488]">{` by ${drive.props.owner}`}</div>
    </div>
  );
};

export default ProjectCard;
