import "../index.css";
import React, { Component } from "react";
import logo from "../assets/logo.svg";
import bellicon from "../assets/bell.svg";

class Header extends Component {
  render() {
    return (
      <div className="w-full flex">
        {/* top header */}
        <div class="fixed w-full">
          <div class="bg-white flex justify-between items-center px-6 py-2 w-full">
            <img src={logo} alt="" class="object-scale-down h-14" />
            <div class="flex justify-center items-center gap-4">
              <h2 class="font-bold text-xl">Huma Medical Center</h2>
              {/* bell icon */}
              <img src={bellicon} alt="" class="h-6" />
              {/* avatar */}
              <img
                src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
                alt=""
                class="ml-auto object-scale-down h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
