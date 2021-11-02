import "../index.css";
import React, { Component } from 'react';
import rocket from "../assets/rocket.svg";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
          <div className="w-full h-3/7   bg-dark absolute">
            <div className="w-full grid grid-rows-4 justify-center py-5 px-10">
              <h1 className="text-sm  font-medium text-center antialiased text-subtle mt-6 mb-2">
                Are you ready?
              </h1>
              <h1 className="text-xl font-medium text-white text-center antialiased mb-4 ">
                Let’s get started
              </h1>
              <div className="flex flex-wrap justify-center mb-4 mt-2">
              <Link to="/signup">
                <button
                  className={` bg-primary text-white cursor-pointer rounded-lg  py-3 px-8 focus:outline-none `}
                >
                  <div class="flex flex-row justify-center ml-2 mr-2">
                    <div className="self-center text-sm">Get Started</div>
                    <div class="h-2 px-1">
                      <img
                        src={rocket}
                        alt=""
                        className="object-scale-down"
                      ></img>
                    </div>
                  </div>
                </button>
                </Link>
              </div>
              <h1 className="text-sm font-medium text-center antialiased text-subtle mt-8">
                Copyright © 2020. medical. All rights reserved.
              </h1>
            </div>
          </div>
        );
    }
}

export default Footer;
