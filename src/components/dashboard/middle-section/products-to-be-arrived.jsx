import React, { Component } from "react";
import "../../../index.css";
import TruckGreen from "../../../assets/truck-green.svg";

class ProductsToBeArrived extends Component {
  render() {
    return (
      <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900">Products to be arrived</p>
        <div className="inline-flex space-x-6 items-center justify-start">
          <img src={TruckGreen} alt="#" />
          <p className="text-3xl text-center text-gray-900">{this.props.amt}</p>
        </div>
      </div>
    );
  }
}

export default ProductsToBeArrived;
