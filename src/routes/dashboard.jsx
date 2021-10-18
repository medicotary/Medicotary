import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Pharmacists from "../assets/pharmacicts.svg";
import AlertRed from "../assets/alert-triangle-red.svg";
import AlertBlue from "../assets/alert-triangle-blue.svg";
import TruckGreen from "../assets/truck-green.svg";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* main content container */}
        <div className="p-6 bg-gray-50 mt-12 ml-72">
          {/* top banner */}
          <div className="bg-purple-100 rounded-2xl flex gap-x-14 p-4 items-center">
            <img className="h-48 rounded-lg" src={Pharmacists} alt="#" />
            <div>
              <p className="opacity-80 text-4xl font-bold text-indigo-700">
                Never worry about your Inventory
              </p>
              <button className="button px-16 py-4 my-4 bg-indigo-600 rounded-lg text-base font-medium text-center text-white">
                Create a Bill
              </button>
            </div>
          </div>
          {/* middle section */}
          <div className="flex gap-4 items-stretch justify-between my-6">
            {/* card1 */}
            <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-2xl font-bold text-gray-900">
                Out of stock products
              </p>
              <div className="inline-flex space-x-6 items-center justify-start">
                <img src={AlertRed} alt="#" />
                <p className="text-5xl text-center text-gray-900">
                  3
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-2xl font-bold text-gray-900">
                Products on low stock
              </p>
              <div className="flex space-x-6 items-center justify-start">
                <img src={AlertBlue} alt="#" />
                <p className="text-5xl leading-10 text-center text-gray-900">
                  3
                </p>
              </div>
            </div>
            {/* card3 */}
            <div className="inline-flex flex-col space-y-3 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-2xl font-bold text-center text-gray-900">
                Number of products
                <br /> to be arrived
              </p>
              <div className="flex space-x-6 items-center justify-start">
                <img src={TruckGreen} alt="#" />
                <p className="text-5xl tracking-wider leading-10 text-center text-gray-900">
                  12
                </p>
              </div>
            </div>
          </div>
          {/* bottom graphs */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
