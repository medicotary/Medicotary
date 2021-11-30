import React, { Component } from "react";
import "../../index.css";

class MiddleStats extends Component {
  render() {
    return (
      <div className="inline-flex bg-white lg:space-x-48 items-center justify-between px-32 py-6 border-2 rounded-2xl border-gray-300">
        <div className="inline-flex flex-col space-y-2.5 items-center justify-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
            <p className="text-2xl font-bold tracking-wider text-center text-blue-400">
              {this.props.remaining}
            </p>
          </div>
          <p className="text-lg font-medium tracking-wide text-center text-gray-900">
            Total remaining inventory
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-center justify-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
            <p className="text-2xl font-bold tracking-wider text-center text-blue-400">
              {this.props.limit}
            </p>
          </div>
          <p className="text-lg font-medium tracking-wide text-center text-gray-900">
            Maximum inventory limit
          </p>
        </div>
      </div>
    );
  }
}

export default MiddleStats;
