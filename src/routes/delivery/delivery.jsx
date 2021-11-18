import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import DeliveryMainCard from "../../components/delivery/maincard";

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar place="5" />
      {/* main content container */}
      <div className="mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
        <div className="flex flex-col">
          <DeliveryMainCard />
          <DeliveryMainCard />
          <DeliveryMainCard />
          <DeliveryMainCard />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
