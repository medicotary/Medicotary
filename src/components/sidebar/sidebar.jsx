import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import {
  DashboardIcon,
  TruckIcon,
  UsersIcon,
  BoxIcon,
  FileTextIcon,
} from "../../icons/index";
import QuickAdd from "./quickadd";
import Gotofaq from "./gotofaq";

class Sidebar extends Component {
  render() {
    return (
      <div className="w-1/5 shadow mt-12 fixed h-full overflow-y-auto text-base lg:text-sm pb-4 sticky?lg:h-(screen-18) lg:block hidden">
        <div className="inline-flex flex-col space-y-2 items-start justify-between flex-1 h-full px-6 pt-6 pb-12">
          <div>
            <QuickAdd />
            {/* navlinks */}
            {/* dashboard */}
            <Link to="/dash" className="w-full">
              <div
                className={
                  "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                  (this.props.place === "1" ? "bg-purple-100" : "")
                }
              >
                <div className="flex space-x-8 items-center justify-start">
                  <DashboardIcon
                    className="h-5 "
                    stroke={this.props.place === "1" ? "#5E48E8" : "#8C8CA2"}
                  />
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "1"
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
                  (this.props.place === "2" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                  <BoxIcon
                    className="h-5 "
                    stroke={this.props.place === "2" ? "#5E48E8" : "#8C8CA2"}
                  />
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "2"
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
                  (this.props.place === "3" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                  <FileTextIcon
                    className="h-5 "
                    stroke={this.props.place === "3" ? "#5E48E8" : "#8C8CA2"}
                  />
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "3"
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
                  (this.props.place === "4" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                  <UsersIcon
                    className="h-5 "
                    stroke={this.props.place === "4" ? "#5E48E8" : "#8C8CA2"}
                  />
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "4"
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
                  (this.props.place === "5" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                  <TruckIcon
                    className="h-5 "
                    stroke={this.props.place === "5" ? "#5E48E8" : "#8C8CA2"}
                  />
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "5"
                        ? "text-indigo-600 "
                        : "text-gray-400")
                    }
                  >
                    Delivery
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* faqs */}
          <Gotofaq />
        </div>
      </div>
    );
  }
}

export default Sidebar;
