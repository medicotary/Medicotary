import "../../index.css";
import React, { Component } from "react";

class DeliveryMainCard extends Component {
  render() {
    return (
      <div className="inline-flex space-x-16 items-center justify-start p-8 bg-white border-2 rounded-2xl border-gray-300 m-4">
        <div className="flex items-end justify-center w-1/5 h-full bg-gray-300 border-2 rounded-lg border-gray-300">
          <img
            className="h-full"
            src={this.props.imgsrc}
            alt=""
          />
        </div>
        <div className=" w-4/5 flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-2xl font-bold text-gray-900">
            {this.props.name}
          </p>
          <p className="font-medium leading-tight text-gray-400">
            {this.props.desc}
          </p>
          <button className="button flex cursor-pointer px-16 py-4 bg-indigo-600 rounded-lg font-medium text-center text-white">
            Create integration
          </button>
        </div>
      </div>
    );
  }
}

export default DeliveryMainCard;
