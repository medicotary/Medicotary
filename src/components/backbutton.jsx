import "../index.css";
import React, { Component } from "react";
import back from "../assets/back.svg";

class BackButton extends Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  };

  render() {
    return (
      <button
        className={`w-full cursor-pointer rounded-lg py-3 px-4 `}
        // onClick={this.context.router.history.goBack}
      >
        <div class="flex flex-row items-center">
          <div class="h-4 px-3">
            <img src={back} alt="" className=""></img>
          </div>
          <div className="self-center text-base text-bold text-black">Back</div>
        </div>
      </button>
    );
  }
}

export default BackButton;
