import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditProductForm from "../../components/forms/EditProductForm";
import { useParams, useHistory } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar />
        {/* main content container */}
        <EditProductForm />
      </div>
    </div>
  );
};

export default EditProduct;
