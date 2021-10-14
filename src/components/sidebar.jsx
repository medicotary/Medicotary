import React, { Component } from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import "../index.css";
import {
  DashboardIcon,
  TruckIcon,
  UsersIcon,
  BoxIcon,
  FileTextIcon,
  PlusIcon,
} from "../icons/index";

class Sidebar extends Component {
  render() {
    return (
      <div className="w-72 shadow mt-12">
        <div className="inline-flex flex-col space-y-2 items-start justify-start flex-1 h-full px-6 pt-10 pb-12 bg-white">
          <div className="inline-flex space-x-2 items-center justify-center w-full h-14 px-16 py-4 bg-indigo-600 rounded-lg">
            <PlusIcon />
            <p className="text-base font-medium  leading-tight text-center text-white">
              Quick add
            </p>
          </div>
          {/* navlinks */}
          {/* dashboard */}
          <Link to="/dash" className="w-full">
            <div className="inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 bg-purple-100 rounded-lg">
              <div className="flex space-x-8 items-center justify-start">
                <DashboardIcon />
                <p className="text-lg font-medium  text-indigo-600">
                  Dashboard
                </p>
              </div>
            </div>
          </Link>
          {/* Products */}
          <Link to="/products" className="w-full">
            <div className="inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg">
              <div className="inline-flex space-x-8 items-center justify-start">
                <BoxIcon />
                <p className="text-lg font-medium  text-gray-400">Products</p>
              </div>
            </div>
          </Link>
          {/* billing */}
          <Link to="/billing" className="w-full">
            <div className="inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg">
              <div className="inline-flex space-x-8 items-center justify-start">
                <FileTextIcon />
                <p className="text-lg font-medium  text-gray-400">Billing</p>
              </div>
            </div>
          </Link>
          {/* vendors */}
          <Link to="/vendors" className="w-full">
            <div className="inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg">
              <div className="inline-flex space-x-8 items-center justify-start">
                <UsersIcon />
                <p className="text-lg font-medium  text-gray-400">Vendors</p>
              </div>
            </div>
          </Link>
          {/* delivery */}
          <Link to="/delivery" className="w-full">
            <div className="inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg">
              <div className="inline-flex space-x-8 items-center justify-start">
                <TruckIcon />
                <p className="text-lg font-medium  text-gray-400">Delivery</p>
              </div>
            </div>
          </Link>
          {/* faqs */}
          <div className="flex flex-col space-y-2.5 items-center justify-center p-6 bg-purple-100 rounded-2xl">
            <p className="w-40 text-2xl font-bold text-center text-gray-900">
              Have some questions?
            </p>
            <Link to="/faqs" className="w-full">
              <button className="flex flex-col items-center justify-center w-full py-4 bg-primary rounded-lg">
                <p className="text-base font-medium text-center text-white">
                  look at the faqs
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
