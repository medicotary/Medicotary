import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import ProductForm from "../../components/forms/ProductForm";

const AddProducts = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar />
        {/* main content container */}
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProducts;
