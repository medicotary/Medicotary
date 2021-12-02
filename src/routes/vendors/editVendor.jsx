import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditVendorForm from "../../components/forms/EditVendorForm";

const AddVendor = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar />
        {/* main content container */}
        <EditVendorForm />
      </div>
    </div>
  );
};

export default AddVendor;
