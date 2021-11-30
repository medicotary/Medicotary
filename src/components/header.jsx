import "../index.css";
import React, { Component } from "react";
import logo from "../assets/fulllogo.png";
import logoSmall from "../assets/logosmall.png";
import bellicon from "../assets/bell.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BackButton from "./backbutton";

class Header extends Component {
  render() {
    return (
      <div class="h-1/10 fixed flex px-3 w-full border bg-white z-50">
        <button type="button" className="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden">
          menu
        </button>
        {this.props.back ? (
          <div className="flex flex-wrap">
            <BackButton />
          </div>
        ) : (
          ""
        )}
        <Link to="/dash">
          <img
            src={logo}
            alt=""
            className="mr-auto object-scale-down h-12 hidden lg:block"
          />
          <img
            src={logoSmall}
            alt=""
            className="mr-auto object-scale-down h-12 lg:hidden"
          />
        </Link>
        <div class="flex ml-auto items-center">
          <h2 class="text-xl font-medium antialiased">
            {this.props.user.companyName.length > 0
              ? this.props.user.companyName
              : "Enter your store name"}
          </h2>
          {/* bell icon */}
          <Link to="/notifications">
            {" "}
            <img src={bellicon} alt="" class="h-6 px-4" />{" "}
          </Link>
          {/* avatar */}
          <Link to="/profile">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/82b8e9101650903.5f2369beab58a.jpg"
              alt=""
              class="object-scale-down h-10 rounded-full "
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapToState = (state) => {
  return {
    user: state.auth.user.user,
  };
};

export default connect(mapToState)(Header);
