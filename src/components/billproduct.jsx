import "../index.css";
import React, { Component } from "react";
import { TrashIcon } from "../icons/index";

class BillProduct extends Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  };

  render() {
    return (
      <ul>
        {this.props.items &&
          this.props.items.map((item, index) => (
            <div className="flex flex-row justify-between items-center my-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">
                  Medicine Name
                </label>
                <input
                  type="name"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
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
                  type="number"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  placeholder="10"
                  required
                />
              </div>
              <h1 className="text-2xl text-black font-medium antialiased  text-left">
                ₹ 0
              </h1>
              <button
                type="button"
                onClick={this.props.deleteFunc}
                className="bg-red-100 p-2 rounded-lg"
              >
                <TrashIcon stroke="red"></TrashIcon>
              </button>
            </div>
          ))}
      </ul>
    );
  }
}

export default BillProduct;
