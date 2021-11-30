import React from "react";
import "../../index.css";
import Pharmacists from "../../assets/pharmacicts.svg";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div className="bg-purple-100 rounded-2xl lg:flex sm:flex-column gap-x-14 mt-10 p-4 items-center z-0">
      <img className="h-48 rounded-lg" src={Pharmacists} alt="#" />
      <div>
        <p className="opacity-80 lg:text-4xl text-2xl font-bold text-indigo-700 z-10">
          Never worry about your Inventory
        </p>
        <Link to="/addbill">
          <button className="button px-16 py-4 my-4 bg-primary hover:bg-indigo-700 transition-all rounded-lg text-sm font-medium text-center text-white">
            Create a Bill
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
