import React, { useContext } from "react";
import { useState } from "react";
import { userAddress, useCreateDrive } from "../context/web3utils";
import Web3 from "web3";
let web3 = new Web3(Web3.givenProvider);
const FormItem = ({ name, id, placeholder, form, setForm }) => {
  return (
    <div>
      <label
        for={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        type={name === "End Date" ? "date" : "text"}
        id={id}
        value={form[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
        }}
        class="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
const CreateDrive = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    story: "",
    goal: "",
    date: "",
    uimg: "",
  });
  const address = userAddress();
  const createCamp = useCreateDrive();
  return (
    <div className=" m-12 flex flex-col justify-center items-center bg-gray-100 shadow-xl rounded-2xl">
      <div className=" bg-gray-300 w-1/5 h-12 flex justify-center items-center rounded-lg shadow-sm mb-8 mt-4">
        <span className=" font-bold text-lg">Start A Drive 🎁</span>
      </div>
      <form className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row w-3/4 justify-between">
          <div className=" w-5/12">
            <FormItem
              name={"Your Name"}
              id={"name"}
              placeholder={"Subrat"}
              form={form}
              setForm={setForm}
            />
          </div>
          <div className=" w-5/12">
            <FormItem
              name={"Drive Title"}
              id={"title"}
              placeholder={"Project Euler"}
              form={form}
              setForm={setForm}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start w-3/4 mt-4">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Story
          </label>
          <textarea
            id="message"
            rows="4"
            value={form.story}
            onChange={(e) => {
              setForm({ ...form, story: e.target.value });
            }}
            class="block p-2.5 w-full h-1/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex flex-row justify-between w-3/4 mt-4">
          <div className="w-5/12">
            <FormItem
              name={"Goal"}
              id={"goal"}
              placeholder={"1 ETH"}
              form={form}
              setForm={setForm}
            />
          </div>
          <div className="w-5/12">
            <FormItem
              name={"End Date"}
              id={"date"}
              form={form}
              setForm={setForm}
            />
          </div>
        </div>
        <div className="w-3/4 mt-4 mb-4">
          <FormItem
            name={"Drive Image"}
            id={"uimg"}
            placeholder={"https://xyz.com/myimg"}
            form={form}
            setForm={setForm}
          />
        </div>
        <div className="mb-8 w-1/5">
          <button
            onClick={() => {
              const date = new Date(form.date);
              const seconds = date.getTime();
              console.log("Clicked");
              console.log(createCamp);
              createCamp([
                form.title,
                form.story,
                web3.utils.toWei(form.goal),
                seconds,
                address,
                form.uimg,
              ]);
              setForm({
                name: "",
                title: "",
                story: "",
                goal: "",
                date: "",
                uimg: "",
              });
            }}
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-10 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            🚀 Submit Drive Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDrive;
