import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import BillProduct from "../components/billproduct";
import { Link } from "react-router-dom";

function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

const AddBill = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar place="3" />
        {/* main content container */}
        <div className=" mt-auto w-3/4 p-10  ml-auto mr-8">
          <div className="container bg-white border rounded border-subtle mt-12 p-10">
            <div className="flex flex-row justify-center">
              <div className="w-1/2 flex flex-col">
                <div>
                  <h1 className="text-xl font-medium antialiased mb-1 text-left">
                    Total amount
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl text-primary font-bold antialiased mb-1 text-left">
                    ₹ 0
                  </h1>
                </div>
              </div>
              <div className="w-1/2">
                <div className="w-1/2 flex flex-col ml-auto">
                  <div>
                    <h1 className="text-xl font-medium antialiased mb-1 text-left">
                      Date
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-2xl text-primary font-bold  antialiased mb-3 text-left">
                      {getCurrentDate()}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Customer Name
                </label>
                <input
                  type="name"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  placeholder="Jhon Doe"
                />
              </div>
              <div>
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  type="description"
                  rows="3"
                  className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="description"
                  placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
                />
              </div>
            </form>
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-medium mt-4 text-primary antialiased mb-1 text-left">
                Products
              </h1>
              <div className="py-5">
                {/* <Link to="/login" class="w-full"> */}
                <button
                  className={`w-full border bg-primary text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                >
                  Add Product
                </button>
                {/* </Link> */}
              </div>
            </div>
            <BillProduct></BillProduct>
          <Link to="/products" class="w-full">
            <button
              className={`w-full border bg-primary text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
            >
              Create Bill
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBill;
