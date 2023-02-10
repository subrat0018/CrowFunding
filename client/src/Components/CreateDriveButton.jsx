import React from "react";
import { Link } from "react-router-dom";

const CreateDriveButton = () => {
  return (
    <div>
      <Link to="/create-drive">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Create Drive
        </button>
      </Link>
    </div>
  );
};

export default CreateDriveButton;
