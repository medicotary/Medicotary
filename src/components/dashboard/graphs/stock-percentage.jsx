import "../../../index.css";
import React, { Component } from "react";
import GaugeChart from "react-gauge-chart";

class StockPercentage extends Component {
  render() {
    return (
        <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 h-30 p-10 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900 ">
          Stock Percentage
        </p>
        <div className="lg:p-10">
          <GaugeChart
            id="gauge-chart"
            textColor="transparent"
            nrOfLevels={4}
            arcsLength={[0.2, 0.6, 0.15, 0.05]}
            colors={["#DED9FC", "#AFA3F3", "#8776EE", "#5E48E8"]}
            percent={ this.props.percentage }
            arcPadding={0.02}
          />
        </div>
      </div>
    );
  }
}

export default StockPercentage;
