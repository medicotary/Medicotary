import React, { useEffect, useCallback, useMemo, useState } from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import ProductComponent from "../../components/productTile";
import { Link } from "react-router-dom";
import { ProductActions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../../icons/index";
import { PlusIcon } from "../../icons/index";

// const product = [
//   {
//     medicine: "Remdesivir",
//     instock: "25",
//     costprice: "₹2300",
//     sellingprice: "₹2500",
//     power: "20 mg",
//     image:
//       "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80",
//   },
//   {
//     medicine: "Crocin",
//     instock: "48",
//     costprice: "₹200",
//     sellingprice: "₹250",
//     power: "50 mg",
//     image:
//       "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80",
//   },
//   // More Product...
// ];

const Product = () => {
  const dispatch = useDispatch();
  dispatch(ProductActions.readProduct({}));
  const [search_product, setSearchProduct] = useState("");
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="flex w-full overflow-x-hidden">
        <Sidebar place="2" />
        {/* main content container */}
        <div className="mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
          <div className="mt-8"></div>
          {/* top search bar */}
          <div className="flex justify-between items-stretch">
            {/* search box */}
            <div className="flex space-x-1 items-stretch">
              <input
                value={search_product}
                onChange={(e) => setSearchProduct(e.target.value)}
                type="search"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                id="search"
                placeholder="Search for product"
              />
              <button
                type="search"
                className={`cursor-pointer bg-primary p-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
              >
                <SearchIcon></SearchIcon>
              </button>
            </div>
            {/* filter dropdown */}
            <div className="w-1/5">
              <select class="appearance-none bg-transparent text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200 p-4 rounded-lg  w-full">
                <option value="v5">Name</option>
                <option value="v4">Cost price</option>
                <option value="v3">Selling price</option>
                <option value="v2">Profit</option>
                <option value="v1">Qty in stock</option>
              </select>
            </div>
            {/* add vendor button */}
            <Link to="/addproduct">
              <button className="flex space-x-2 justify-center button px-16 py-4 bg-indigo-600 rounded-lg text-sm font-medium text-center text-white">
                <PlusIcon></PlusIcon>
                Add a product
              </button>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Medicine
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          instock
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          cost price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          selling price
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <ProductComponent />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
