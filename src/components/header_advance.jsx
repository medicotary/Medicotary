import "../index.css";
import React, { Component } from "react";
import logo from "../assets/fulllogo.png";
import bellicon from "../assets/bell.svg";
import back from "../assets/back.svg";

class Header extends Component {
  render() {
    return (
      <div class="fixed w-full border">
        <div class="flex w-full px-3">
          <div className="flex flex-wrap">
            <button className={`w-full cursor-pointer rounded-lg py-3 px-4 `}>
              <div class="flex flex-row items-center">
                <div class="h-4 px-3">
                  <img src={back} alt="" className=""></img>
                </div>
                <div className="self-center text-base text-bold text-black">
                  Back
                </div>
              </div>
            </button>
          </div>
          <img
            src={logo}
            alt=""
            className="mr-auto object-scale-down h-12"
          ></img>
          <div class="flex ml-auto items-center">
            <h2 class="text-xl font-medium antialiased">Huma Medical Center</h2>
            {/* bell icon */}
            <img src={bellicon} alt="" class="h-6 px-4" />
            {/* avatar */}
            <img
              src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
              alt=""
              class="object-scale-down h-10 rounded-full "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
