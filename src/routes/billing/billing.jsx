import React, { useState } from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import MiddleStats from "../../components/billing/middle-stats";
import { PieChart } from "react-minimal-pie-chart";
import { PlusIcon, SearchIcon } from "../../icons/index";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import Loader from "../../components/loader";

const invoices = [
  {
    name: "Hayat Tamboli",
    totalamount: "₹ 1100",
    date: "10-10-2021",
    desc: "Lorem ipsum dolor sit amet, consectet ui i",
  },
  {
    name: "Manas gupta",
    totalamount: "₹ 500",
    date: "9-10-2021",
    desc: "Lorem ipsum dolor sit amet, consectet ui i",
  },
  // More invoices...
];

const Billing = () => {
  const [search_invoice, setSearchInvoice] = useState("");
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div>
        <Sidebar place="3" />
        {/* main content container */}
        <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto flex flex-col space-y-6">
          <div className="mt-10 flex space-x-10">
            {/* addcharts here */}
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">Sales</p>
              <div className="w-full -mt-4">
                <Chart
                  width={"400px"}
                  height={"250px"}
                  chartType="BarChart"
                  loader={<Loader color="#8776EE" />}
                  data={[
                    [
                      "Date",
                      "Sales",
                      { role: "style" },
                      {
                        sourceColumn: 0,
                        role: "annotation",
                        type: "string",
                        calc: "stringify",
                      },
                    ],
                    [null , 40, "#8776EE", null],
                    [null , 70, "#8776EE", null],
                    [null , 50, "#8776EE", null],
                    [null , 20, "#8776EE", null],
                    [null , 40, "#8776EE", null],
                    [null , 50, "#8776EE", null],
                    [null , 70, "#8776EE", null],
                  ]}
                  options={{
                    is3D: true,
                    backgroundColor: "#00ffff00",
                    width: 400,
                    height: 250,
                    bar: { groupWidth: "70%" },
                    legend: { position: "none" },
                  }}
                />
              </div>
            </div>
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">Statistics</p>
              <div className="w-48 object-scale-down">
                <PieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
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
          </div>
          <MiddleStats remaining="200" limit="2000" />
          {/* top search bar */}
          <div className="flex justify-between items-stretch">
            {/* search box */}
            <div className="flex space-x-1 items-stretch">
              <input
                value={search_invoice}
                onChange={(e) => setSearchInvoice(e.target.value)}
                type="search"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                id="search"
                placeholder="Search for Invoice"
              />
              <button
                type="search"
                className={`cursor-pointer bg-primary p-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
              >
                <SearchIcon></SearchIcon>
              </button>
            </div>
            {/* add vendor button */}
            <Link to="/addbill">
              <button className="flex space-x-2 justify-center button px-16 py-4 bg-indigo-600 rounded-lg text-sm font-medium text-center text-white">
                <PlusIcon></PlusIcon>
                Add a bill
              </button>
            </Link>
          </div>
          {/* table */}
          <p className="text-4xl font-medium text-gray-900">Invoices</p>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    total amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    description
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {person.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.totalamount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {person.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{person.desc}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="/dash"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
