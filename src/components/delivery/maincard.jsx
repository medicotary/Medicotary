import "../../index.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryMainCard extends Component {
  render() {
    return (
      <div className="lg:flex-row flex flex-col lg:space-x-16 lg:items-center justify-start p-8 bg-white border-2 rounded-2xl border-gray-300 m-4 items-stretch">
        <div className="flex items-end justify-center lg:w-1/5 h-full bg-gray-300 border-2 rounded-lg border-gray-300">
          <img className="h-full" src={this.props.imgsrc} alt="company" />
        </div>
        <div className=" lg:w-4/5 w-full flex flex-col space-y-2.5 lg:items-start items-stretch justify-start mt-4 lg:mt-0">
          <p className="text-2xl font-bold text-gray-900">{this.props.name}</p>
          <p className="font-medium leading-tight text-gray-400">
            {this.props.desc}
          </p>
          {this.props.cardtype === "new" ? (
            <Link to="/createintegration">
              <button className="button flex w-full justify-center items-center cursor-pointer lg:px-16 py-4 bg-primary hover:bg-indigo-700 transition-all rounded-lg font-medium text-center text-white">
                Create integration
              </button>
            </Link>
          ) : (
            <Link to={this.props.to}>
              <button className="button flex w-full justify-center items-center cursor-pointer lg:px-16 py-4 bg-green-600 hover:bg-green-700 transition-all rounded-lg font-medium text-center text-white">
                Track details
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default DeliveryMainCard;
