import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Pharmacists from "../assets/pharmacicts.svg";
import AlertRed from "../assets/alert-triangle-red.svg";
import AlertBlue from "../assets/alert-triangle-blue.svg";
import TruckGreen from "../assets/truck-green.svg";
import GaugeChart from "react-gauge-chart";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex h-9/10">
        {/* sidebar */}
        <Sidebar place="1" />
        {/* main content container */}
        <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
          {/* top banner */}
          <div className="bg-purple-100 rounded-2xl flex gap-x-14 mt-10 p-4 items-center">
            <img className="h-48 rounded-lg" src={Pharmacists} alt="#" />
            <div>
              <p className="opacity-80 text-4xl font-bold text-indigo-700">
                Never worry about your Inventory
              </p>
              <button className="button px-16 py-4 my-4 bg-indigo-600 rounded-lg text-sm font-medium text-center text-white">
                Create a Bill
              </button>
            </div>
          </div>
          {/* middle section */}
          <div className="flex gap-4 items-stretch justify-between my-6">
            {/* card1 */}
            <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">
                Out of stock products
              </p>
              <div className="inline-flex space-x-6 items-center justify-start">
                <img src={AlertRed} alt="#" />
                <p className="text-3xl text-center text-gray-900">3</p>
              </div>
            </div>
            {/* card2 */}
            <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">
                Products on low stock
              </p>
              <div className="flex space-x-6 items-center justify-start">
                <img src={AlertBlue} alt="#" />
                <p className="text-3xl leading-10 text-center text-gray-900">
                  3
                </p>
              </div>
            </div>
            {/* card3 */}
            <div className="inline-flex flex-col space-y-3 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-center text-gray-900">
                Number of products
                <br /> to be arrived
              </p>
              <div className="flex space-x-6 items-center justify-start">
                <img src={TruckGreen} alt="#" />
                <p className="text-3xl tracking-wider leading-10 text-center text-gray-900">
                  12
                </p>
              </div>
            </div>
          </div>
          {/* bottom graphs */}
          <div className="flex space-x-6">
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">Weighted Score</p>
              <div className="w-48 object-scale-down">
                <PieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    { title: "One", value: 10, color: "#489BE8" },
                    { title: "Two", value: 15, color: "#31D0AA" },
                    { title: "Three", value: 20, color: "#E85B81" },
                  ]}
                  lengthAngle={360}
                  lineWidth={45}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
              </div>
            </div>
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 h-30 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900 ">
                Stock Percentage
              </p>
              <div className="p-10">
                <GaugeChart
                  id="gauge-chart"
                  textColor="transparent"
                  nrOfLevels={4}
                  arcsLength={[0.2, 0.6, 0.15, 0.05]}
                  colors={["#DED9FC", "#AFA3F3", "#8776EE", "#5E48E8"]}
                  percent={0.4273035096951447}
                  arcPadding={0.02}
                />
              </div>
            </div>
            {/* ---------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
