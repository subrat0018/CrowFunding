import React from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
let web3 = new Web3(Web3.givenProvider);
const ProjectCard = (drive) => {
  const today = new Date();
  const secondsPassed = today.getTime();
  const secondsInADay = 24 * 60 * 60 * 1000;

  const daysLeft = parseInt(
    (parseInt(web3.utils.hexToNumber(drive.props.deadline._hex)) -
      parseInt(secondsPassed)) /
      secondsInADay
  );
  if (daysLeft <= 0) return;

  const imgUrl = drive.props.imgurl;
  const story = drive.props.description;
  const amountCollected = parseFloat(drive.props.amountCollected._hex);
  const targetAmount = web3.utils
    .fromWei(drive.props.targetAmount._hex)
    .slice(0, 4);

  const ownerAddress = drive.props.owner;
  const title = drive.props.title;
  return (
    <Link
      to="/drive-details"
      state={{
        daysLeft: daysLeft,
        imgUrl: imgUrl,
        story: story,
        amountCollected: amountCollected,
        targetAmount: targetAmount,
        ownerAddress: ownerAddress,
        title: title,
      }}
      className="flex flex-col justify-center items-center bg-gray-50 rounded-md shadow-2xl cursor-pointer "
    >
      <div className="w-11/12 h-11/12 mt-4 mb-4">
        <img className="w-72 h-56 m-auto" src={imgUrl} alt="" />
      </div>
      <div className="w-4/5 flex ml-15 flex-col mb-4">
        <h2 className=" text-[#238628] font-bold text-xl ">{title}</h2>
        <p className="text-[#9fe488]">{story.substr(0, 50)}</p>
      </div>
      <div className="w-4/5 flex ml-15 flex-row justify-between">
        <div className="flex flex-col">
          <h2 className=" text-[#238628] font-bold text-xl ">
            {amountCollected}
          </h2>
          <span className=" text-[#9fe488]">{`Raised of ${targetAmount}`}</span>
        </div>
        <div className="flex flex-col">
          <h2 className=" text-[#238628] font-bold text-xl ">{daysLeft}</h2>
          <span className="text-[#9fe488]">Days Left</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
