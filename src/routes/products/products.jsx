import React, { useState, useEffect } from "react";
import "../../index.css";
import { withRouter } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import ProductComponent from "../../components/productTile";
import { Link } from "react-router-dom";
import { ProductActions } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
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
  // const [search_product, setSearchProduct] = useState("");
  console.log("Product Reached");
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="flex w-full overflow-x-hidden">
        <Sidebar place="2" />
        {/* main content container */}
        <ProductComponent />
      </div>
    </div>
  );
};

export default Product;
