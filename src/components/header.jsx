import "../index.css";
import React, { Component } from "react";
import logo from "../assets/fulllogo.png";
import bellicon from "../assets/bell.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div class="fixed flex px-3 w-full border">
        <Link to="/dash">
          <img src={logo} alt="" className="mr-auto object-scale-down h-12" />{" "}
        </Link>
        <div class="flex ml-auto items-center">
          <h2 class="text-xl font-medium antialiased">Huma Medical Center</h2>
          {/* bell icon */}
          <Link to="/notifications">
            {" "}
            <img src={bellicon} alt="" class="h-6 px-4" />{" "}
          </Link>
          {/* avatar */}
          <Link to="/profile">
            <img
              src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
              alt=""
              class="object-scale-down h-10 rounded-full "
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
