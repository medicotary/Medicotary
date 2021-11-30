import "../../index.css";
import React, { Component } from "react";

class ChangePassword extends Component {
  render() {
    return (
      <div className="w-full border-2 rounded-xl flex bg-white p-7 ">
        <div className="grid grid-flow-row grid-row-3">
          <div>
            <label htmlFor="old_password" className="text-sm font-medium">
              Old Password
            </label>
            <input
              type="old_password"
              className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="old_password"
              placeholder="***************"
            />
          </div>
          <div className="w-full">
            <label htmlFor="new_password" className="text-sm font-medium">
              New Password
            </label>
            <input
              type="new_password"
              className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="new_password"
              placeholder="***************"
            />
          </div>
          <div className="flex">
            <button
              className={`w-full  cursor-pointer bg-primary hover:bg-indigo-700 transition-all py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
            >
              change password
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
