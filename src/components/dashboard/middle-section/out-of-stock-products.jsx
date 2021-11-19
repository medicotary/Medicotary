import React, { Component } from "react";
import "../../../index.css";
import AlertRed from "../../../assets/alert-triangle-red.svg";

class OutOfStockProducts extends Component {
  render() {
    return (
      <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900">Out of stock products</p>
        <div className="inline-flex space-x-6 items-center justify-start">
          <img src={AlertRed} alt="#" />
          <p className="text-3xl text-center text-gray-900">{this.props.amt}</p>
        </div>
      </div>
    );
  }
}

export default OutOfStockProducts;
