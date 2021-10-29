import "../../index.css";
import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

class DonutChart extends Component {
  render() {
    return (
      <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900">{ this.props.title }</p>
        <div className="w-48 object-scale-down">
          <PieChart
            animate
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={[
              { title: "Low stock", value: 45, color: "#489BE8" },
              { title: "Arriving stock", value: 55, color: "#31D0AA" },
              { title: "Out of stock", value: 20, color: "#E85B81" },
            ]}
            lengthAngle={360}
            lineWidth={45}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
          />
        </div>
        <div
          className="inline-flex space-x-6 items-start justify-start"
          style={{ width: 429.25, height: 24 }}
        >
          <div className="w-6 h-4 bg-blue-400 rounded-full" />
          <div className="flex space-x-2 items-center justify-start">
            <p className="font-medium  leading-tight text-gray-900">
              Low stock
            </p>
          </div>
          <div className="w-6 h-4 bg-green-400 rounded-full" />
          <div className="flex space-x-2 items-center justify-start">
            <p className=" font-medium  leading-tight text-gray-900">
              Arriving stock
            </p>
          </div>
          <div className="w-6 h-4 bg-pink-500 rounded-full" />
          <div className="flex space-x-2 items-center justify-start">
            <p className=" font-medium leading-tight text-gray-900">
              Out of stock
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DonutChart;
