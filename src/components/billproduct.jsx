import "../index.css";
import React, { Component } from "react";

class BillProduct extends Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  };

  render() {
    return (
      <div className="flex flex-row justify-between">
        <img
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
          alt=""
          class="object-scale-down h-10 rounded-full "
        />
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Product Name
          </label>
          <input
            type="name"
            className={`w-2/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            id="name"
            placeholder="Remdesivir"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Quantity
          </label>
          <input
            type="name"
            className={`w-2/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            id="name"
            placeholder="Remdesivir"
            required
          />
        </div>
        <h1 className="text-2xl text-black font-medium antialiased  text-left">
          ₹ 0
        </h1>
      </div>
    );
  }
}

export default BillProduct;
