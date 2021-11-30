import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../index.css";
import logo from "../assets/fulllogo.png";
import illustration from "../assets/homepage.png";
import heart from "../assets/heart.svg";
import rocket from "../assets/rocket.svg";
import { useSelector } from "react-redux";
import Footer from "../components/footer";

const Home = () => {
  const token = useSelector((state) => state.auth.user.token);
  return (
    <div>
      {token ? <Redirect to="/dash/" /> : null}
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
            class="absolute -ml-32 p-0 opacity-10 h-600 w-600 hidden lg:block flex z-0"
            alt="heart"
            src={heart}
          ></img>
        </div>
        <div className="h-screen flex flex-col-reverse lg:flex-row">
          <div className="lg:w-3/5 w-screen  mb-auto">
            <div className="w-full bg-white mx-auto  ml-6 py-5 lg:px-20">
              <h1 className="lg:text-5xl text-3xl font-bold antialiased lg:mb-7 mb-2 mt-10">
                Pharmacists can now focus on customers
              </h1>
              <h1 className="lg:text-3xl font-normal mb-6">
                Empowering pharmacists with the new age technology which solves
                all thier inventory related issues
              </h1>
              <div className="flex flex-wrap mt-3 z-40">
                <Link to="/signup">
                  <button className="bg-primary text-white cursor-pointer rounded-lg border py-3 px-8 focus:outline-none z-40">
                    <div class="flex flex-row justify-center ml-2 mr-2">
                      <div className="self-center text-sm">Get Started</div>
                      <div class="h-2 px-1">
                        <img
                          src={rocket}
                          alt="rocket"
                          className="object-scale-down z-0"
                        ></img>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-screen z-0">
            <div class="items-center py-5 px-10 w-3/5 mx-auto lg:w-full">
              <img src={illustration} alt="pharmacisct"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
