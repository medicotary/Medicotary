import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

class Gotofaq extends Component {
  render() {
    return (
      <div className="w-full">
        {/* faqs */}
        <div className="flex flex-col w-full space-y-2.5 items-center justify-center p-6 bg-purple-100 rounded-2xl">
          <p className="w-40 text-lg font-bold text-center text-gray-900">
            Have some questions?
          </p>
          <Link to="/faqs" className="w-full">
            <button className="flex flex-col items-center justify-center w-full py-4 bg-primary hover:bg-indigo-700 transition-all rounded-lg">
              <p className="text-sm text-medium text-center text-white">
                look at the faqs
              </p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Gotofaq;
