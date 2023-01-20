import React from "react";
import { GiWallet } from "react-icons/gi";
import { MdInsertDriveFile } from "react-icons/md";

const WalletCard = () => {
  return (
    <div className="flex flex-row space-x-1">
      <GiWallet
        style={{
          width: "30",
          height: "30",
          color: "#666666",
        }}
      />
      <div className="text-[#666666] flex flex-col text-xs font-semibold">
        <span className=" ">100 eth </span>
        <span>Donated</span>
      </div>
    </div>
  );
};
const DriveCard = () => {
  return (
    <div className="flex flex-row space-x-1">
      <MdInsertDriveFile
        style={{
          width: "30",
          height: "30",
          color: "#666666",
        }}
      />
      <div className="text-[#666666] flex flex-col text-xs font-semibold">
        <span className=" ">100</span>
        <span>Drives</span>
      </div>
    </div>
  );
};
const ProfileCard = ({ link, name, email, account }) => {
  return (
    <div className=" m-8 flex justify-center items-center flex-col">
      <img
        className=" shadow-xl w-36 h-36 rounded-full"
        src={link}
        alt="Rounded avatar"
      ></img>
      <div className="flex flex-col justify-center items-center text-[#666666]">
        <span className=" text-xl font-semibold ">{`🧑 ${name}`}</span>
        <span>{account}</span>
        <span>{email}</span>
      </div>
      <div className="flex flex-row space-x-10 mt-6 shadow-md bg-gray-100 border-4 p-4 rounded-2xl border-solid hover:cursor-pointer">
        <WalletCard />
        <DriveCard />
      </div>
    </div>
  );
};
const Profile = () => {
  return (
    <div>
      <ProfileCard
        link={
          "https://www.bigbash.com.au/-/media/Players/Men/International/India/Virat-Kohli-T20I2020.ashx"
        }
        name={"Subrat Chandra Naha"}
        account={"xxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
        email={"subratchandra2003@gmail.com"}
      />
    </div>
  );
};

export default Profile;
