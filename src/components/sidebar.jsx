import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  DashboardIcon,
  TruckIcon,
  UsersIcon,
  BoxIcon,
  FileTextIcon,
} from "../icons/index";
import QuickAdd from "./quickadd";

class Sidebar extends Component {
  render() {
    return (
      <div className="w-1/5 shadow mt-12 fixed">
        <div className="inline-flex flex-col space-y-2 items-start justify-start flex-1 h-full px-6 pt-6 pb-12">
          <QuickAdd></QuickAdd>
          {/* navlinks */}
          {/* dashboard */}
          <Link to="/dash" className="w-full">
            <div
              className={
                "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                (this.props.place == 1 ? "bg-purple-100" : "")
              }
            >
              <div className="flex space-x-8 items-center justify-start">
                <DashboardIcon className="h-5 " />
                <p
                  className={
                    "text-sm font-medium " +
                    (this.props.place == 1
                      ? "text-indigo-600 "
                      : "text-gray-400")
                  }
                >
                  Dashboard
                </p>
              </div>
            </div>
          </Link>
          {/* Products */}
          <Link to="/products" className="w-full">
            <div
              className={
                "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                (this.props.place == 2 ? "bg-purple-100" : "")
              }
            >
              <div className="inline-flex space-x-8 items-center justify-start">
                <BoxIcon className="h-5 " />
                <p
                  className={
                    "text-sm font-medium " +
                    (this.props.place == 2
                      ? "text-indigo-600 "
                      : "text-gray-400")
                  }
                >
                  Products
                </p>
              </div>
            </div>
          </Link>
          {/* billing */}
          <Link to="/billing" className="w-full">
            <div
              className={
                "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                (this.props.place == 3 ? "bg-purple-100" : "")
              }
            >
              <div className="inline-flex space-x-8 items-center justify-start">
                <FileTextIcon className="h-5 " />
                <p
                  className={
                    "text-sm font-medium " +
                    (this.props.place == 3
                      ? "text-indigo-600 "
                      : "text-gray-400")
                  }
                >
                  Billing
                </p>
              </div>
            </div>
          </Link>
          {/* vendors */}
          <Link to="/vendors" className="w-full">
            <div
              className={
                "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                (this.props.place == 4 ? "bg-purple-100" : "")
              }
            >
              <div className="inline-flex space-x-8 items-center justify-start">
                <UsersIcon className="h-5 " />
                <p
                  className={
                    "text-sm font-medium " +
                    (this.props.place == 4
                      ? "text-indigo-600 "
                      : "text-gray-400")
                  }
                >
                  Vendors
                </p>
              </div>
            </div>
          </Link>
          {/* delivery */}
          <Link to="/delivery" className="w-full">
            <div
              className={
                "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                (this.props.place == 5 ? "bg-purple-100" : "")
              }
            >
              <div className="inline-flex space-x-8 items-center justify-start">
                <TruckIcon className="h-5 " />
                <p
                  className={
                    "text-sm font-medium " +
                    (this.props.place == 5
                      ? "text-indigo-600 "
                      : "text-gray-400")
                  }
                >
                  Delivery
                </p>
              </div>
            </div>
          </Link>
          {/* faqs */}
          <div className="flex flex-col w-full space-y-2.5 items-center justify-center p-6 bg-purple-100 rounded-2xl">
            <p className="w-40 text-lg font-bold text-center text-gray-900">
              Have some questions?
            </p>
            <Link to="/faqs" className="w-full">
              <button className="flex flex-col items-center justify-center w-full py-4 bg-primary rounded-lg">
                <p className="text-sm text-medium text-center text-white">
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
