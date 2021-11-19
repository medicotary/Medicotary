import React, { Component } from "react";
import "../../../index.css";
import AlertBlue from "../../../assets/alert-triangle-blue.svg";

class ProductsOnLowStock extends Component {
  render() {
    return (
      <div className="inline-flex flex-col space-y-6 items-center justify-center flex-1 p-2 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900">Products on low stock</p>
        <div className="inline-flex space-x-6 items-center justify-start">
          <img src={AlertBlue} alt="#" />
          <p className="text-3xl text-center text-gray-900">{this.props.amt}</p>
        </div>
      </div>
    );
  }
}

export default ProductsOnLowStock;
