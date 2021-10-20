import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const AddBill = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar place="3" />
        {/* main content container */}
        <div className=" mt-auto w-3/4 p-10  ml-auto mr-8">
          <div className="container bg-white border rounded border-subtle mt-12 px-10">
            <div className="flex flex-row justify-center">
              <div className="w-1/2 flex flex-col">
                <div>
                  <h1 className="text-xl font-medium mt-4 antialiased mb-1 text-left">
                    Total amount
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl text-primary font-medium mt-4 antialiased mb-1 text-left">
                    Rs 145.0
                  </h1>
                </div>
              </div>
              <div className="w-1/2">
                <div className="w-1/2 flex flex-col ml-auto">
                  <div>
                    <h1 className="text-xl font-medium mt-4 antialiased mb-1 text-left">
                      Date
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-2xl text-primary font-medium mt-4 antialiased mb-3 text-left">
                      8 Apr 2021
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
                  placeholder="Remdesivir"
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
            <div className="flex flex-row justify-between">
              <img
                src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
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
                />
              </div>
              <h1 className="text-2xl text-black font-medium antialiased  text-left">
                ₹ 1670
              </h1>
            </div>
            <div className="flex flex-row justify-between">
              <img
                src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
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
                />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="name" className="text-sm font-medium">
                  Quantity
                </label>
                <input
                  type="name"
                  className={`w-2/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  placeholder="Remdesivir"
                />
              </div>
              <h1 className="text-2xl text-black font-medium antialiased  text-left">
                ₹ 2200
              </h1>
            </div>
            <div className="flex flex-row justify-between">
              <img
                src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
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
                />
              </div>
              <h1 className="text-2xl text-black font-medium antialiased  text-left">
                ₹ 1700
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBill;
