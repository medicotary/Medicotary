import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";
import WeightedScore from "../components/dashboard/graphs/weighted-score";
import StockPercentage from "../components/dashboard/graphs/stock-percentage";
import TopBanner from "../components/dashboard/topbanner";
import OutOfStockProducts from "../components/dashboard/middle-section/out-of-stock-products";
import ProductsOnLowStock from "../components/dashboard/middle-section/products-on-low-stock";
import ProductsToBeArrived from "../components/dashboard/middle-section/products-to-be-arrived";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex h-9/10">
        <Sidebar place="1" />
        {/* main content container */}
        <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
          <TopBanner />
          {/* middle section */}
          <div className="flex gap-4 items-stretch justify-between my-6">
            <OutOfStockProducts amt="4" />
            <ProductsOnLowStock amt="4" />
            <ProductsToBeArrived amt="4" />
          </div>
          {/* bottom graphs */}
          <div className="flex space-x-6">
            <WeightedScore />
            <StockPercentage percentage="0.4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
