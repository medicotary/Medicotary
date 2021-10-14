import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/fulllogo.png";
import illustration from "../assets/homepage.svg";
import heart from "../assets/heart.svg";
import rocket from "../assets/rocket.svg";
import Footer from "../components/footer";

const Home = () => {
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   let email = e.target.elements.email?.value;
  //   let password = e.target.elements.password?.value;

  //   console.log(email, password);
  // };
  return (
    <div>
      <div className="h-screen max-w-screen">
        <div class="flex flex-row mt-3">
          <div class="py-5 px-10">
            <img
              src={logo}
              alt=""
              className="ml-auto object-scale-down h-12"
            ></img>
          </div>
          <div className="py-5 ml-auto">
          <Link to="/login" class="w-full">
            <button
              className={`w-full py-2 px-12 text-sm  cursor-pointer text-black rounded-lg`}
            >
              Login
            </button>
            </Link>
          </div>
          <div className="py-5 mr-10">
          <Link to="/signup" class="w-full">
            <button
              className={`w-full cursor-pointer bg-primary py-2 px-10 text-sm text-white rounded-lg border focus:outline-none focus:`}
            >
              Signup
            </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            class="absolute ml-0 p-0 opacity-10 h-600 w-600 flex"
            alt=""
            src={heart}
          ></img>
        </div>
        <div className="h-screen flex">
          <div className="w-3/5 mb-auto">
            <div className="w-full bg-white mx-auto  ml-6 py-5 px-20">
              <h1 className="text-5xl font-medium antialiased mb-7 mt-10">
                Pharmacists can now focus on customers
              </h1>
              <h1 className="text-3xl font-normal antialiased mb-6">
                Empowering pharmacists with the new age technology which solves
                all thier inventory related issues
              </h1>
              <div className="flex flex-wrap mt-3">
                <button
                  className={` bg-primary text-white cursor-pointer rounded-lg border py-3 px-8 focus:outline-none `}
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
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex">
              <div class="items-center py-5 px-10">
                <img src={illustration} alt="" className="ml-auto"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
