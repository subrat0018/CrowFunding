import React from "react";
import { useState } from "react";
import crowdFunding from "../Assets/crowdfunding.png";
import { useUtils } from "../context/web3utils";
import ProjectCard from "../Components/ProjectCard";
const Home = () => {
  const a = useUtils();
  const presentDrives = a.slice(-1)[0];
  return (
    <div className="m-6">
      <div className=" flex flex-row justify-between">
        <div className="flex flex-col justify-start items-start">
          <h1 className=" font-bold text-3xl w-3/4">
            Connecting projects that matter with people who care
          </h1>
          <div className="flex flex-row justify-start font-semibold mt-6">
            <span className="">FUND DREAMS</span>
            <span className="ml-2">
              <span className=" text-green-600">+</span> KICKSTART FUTURE
            </span>
            <span className="ml-2">
              <span className=" text-green-600">+</span> EMPOWER CREATIVITY
            </span>
          </div>
          <div></div>
        </div>
        <div className="w-1/3">
          <img src={crowdFunding} />
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-3xl">Featured Projects</h1>
        <div className="flex flex-row justify-between mt-8 items-center">
          {presentDrives === undefined
            ? ""
            : presentDrives.map((item, index) => {
                return <ProjectCard key={index} props={item} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Home;
