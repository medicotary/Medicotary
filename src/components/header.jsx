import "../index.css";
import React, { Component } from "react";
import logo from "../assets/fulllogo.png";
import bellicon from "../assets/bell.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div class="h-1/10 fixed flex px-3 w-full border bg-white z-50">
        <Link to="/dash">
          <img src={logo} alt="" className="mr-auto object-scale-down h-12" />{" "}
        </Link>
        <div class="flex ml-auto items-center">
          <h2 class="text-xl font-medium antialiased">
            {this.props.user.companyName.length > 0
              ? this.props.user.companyName
              : "Huma Medical"}
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
