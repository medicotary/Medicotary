import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar place="5" />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Delivery;
