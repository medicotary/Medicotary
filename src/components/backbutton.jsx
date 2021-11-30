import "../index.css";
import React, { Component } from "react";
import back from "../assets/back.svg";
// import { useHistory } from "react-router-dom";

// const CustomGoback = () => {
//   let history = useHistory();
//   history.goBack();
// };

class BackButton extends Component {
  render() {
    return (
      <a
        href="/dash"
        className={`w-full cursor-pointer rounded-lg py-3 px-4 `}
        // onClick={CustomGoback}
      >
        <div class="flex flex-row items-center">
          <div class="h-4 px-3">
            <img src={back} alt="" className=""></img>
          </div>
          <div className="self-center text-base text-bold text-black">Back</div>
        </div>
      </a>
    );
  }
}

export default BackButton;
