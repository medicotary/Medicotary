import React, { useState } from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [lowStock, setLowStock] = useState("0");
  const [costPrice, setCostPrice] = useState("0");
  const [sellingPrice, setSellingPrice] = useState("0");
  const [preferredVendor, setPreferredVendor] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const submit = () => {
    console.log({
      name,
      quantity,
      lowStock,
      costPrice,
      sellingPrice,
      preferredVendor,
      additionalNotes,
    });
  };
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar place="2" />
        {/* main content container */}
        <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
          <div className="mt-12">
            <div className="flex flex-row justify-center">
              <div className="w-1/3">
                <div class="flex flex-col mt-3">
                  <div className="flex">
                    <div className="">
                      <img
                        src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                        alt=""
                        class="rounded w-2/3  object-scale-down"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="py-3">
                      {/* <Link to="/login" class="w-full"> */}
                      <button
                        className={`w-2/3 border bg-primary text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                      >
                        Browse Photos
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      {/* <Link to="/login" class="w-full"> */}
                      <button
                        className={`w-2/3 border bg-error text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                      >
                        Remove Photo
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-10">
                <form>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="name"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="name"
                      placeholder="Remdesivir"
                    />
                  </div>
                  <div>
                    <label htmlFor="qty" className="text-sm font-medium">
                      Quantity in stock
                    </label>
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="qty"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                      id="qty"
                      placeholder="220"
                    />
                  </div>
                  <div>
                    <label htmlFor="lqty" className="text-sm font-medium">
                      Low stock warning
                    </label>
                    <input
                      value={lowStock}
                      onChange={(e) => setLowStock(e.target.value)}
                      type="lqty"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="lqty"
                      placeholder="15"
                    />
                  </div>
                  <div class="flex flex-row justify-evenly">
                    <div>
                      <label htmlFor="cp" className="text-sm font-medium">
                        Cost Price (1 item)
                      </label>
                      <input
                        value={costPrice}
                        onChange={(e) => setCostPrice(e.target.value)}
                        type="cp"
                        className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="cp"
                        placeholder="	₹ 150"
                      />
                    </div>
                    <div>
                      <label htmlFor="sp" className="text-sm font-medium">
                        Selling Price (1 item)
                      </label>
                      <input
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        type="sp"
                        className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="sp"
                        placeholder="₹ 170"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="vendor" className="text-sm font-medium">
                      Preffered vendor
                    </label>
                    <input
                      value={preferredVendor}
                      onChange={(e) => setPreferredVendor(e.target.value)}
                      type="vendor"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="vendor"
                      placeholder="Select Vendor"
                    />
                  </div>
                  <div>
                    <label htmlFor="vendor" className="text-sm font-medium">
                      Additional Notes
                    </label>
                    <textarea
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      type="vendor"
                      rows="3"
                      className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="vendor"
                      placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
                    />
                  </div>

                  <div class="flex flex-row justify-between mt-3">
                    <div className="py-5">
                      <Link to="/products" class="w-full">
                        <button
                          onClick={submit}
                          className={`w-full border bg-primary text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                        >
                          Add Product
                        </button>
                      </Link>
                    </div>
                    <div className="py-5">
                      <Link to="/products" class="w-full">
                        <button
                          className={`w-full cursor-pointer py-2 px-12 text-sm text-primary rounded-lg border border-primary focus:outline-none focus:`}
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
