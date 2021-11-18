import React, { useEffect, useCallback, useMemo } from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import ProductComponent from "../../components/productTile";
import { Link } from "react-router-dom";
import { ProductActions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

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
          <div className="mt-10"></div>
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
