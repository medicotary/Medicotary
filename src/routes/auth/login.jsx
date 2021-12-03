import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import "../../index.css";
import logo from "../../assets/fulllogo.png";
import illustration from "../../assets/login.svg";
import google from "../../assets/google.svg";

const Login = (props) => {
  return (
    <div className="lg:flex-row flex flex-col-reverse">
      {/* {props.isLoggedIn ? <Redirect to="/dash/" /> : null} */}
      <div className="lg:w-1/2  xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-4 antialiased lg:mb-12 mb-6 text-center">
              Welcome Back!
            </h1>
            <LoginForm />
            <div className="flex flex-wrap mt-3">
              {/* <Link to="/dash" className="w-full">
                <button
                  className={`w-full cursor-pointer rounded-lg border py-2 px-4 focus:outline-none `}
                >
                  <div className="flex flex-row justify-center">
                    <div className="h-5 px-2">
                      <img src={google} alt="" className="object-fit"></img>
                    </div>
                    <div className="self-center text-sm text-subtle">
                      Continue with Google
                    </div>
                  </div>
                </button>
              </Link> */}
            </div>
            <div className="text-sm font-medium mt-4">
              New here?{" "}
              <Link to="/signup" className="text-secondary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:h-screen xl:max-w-screen-sm bg-purple-200 lg:ml-auto">
        <div className="grid grid-rows-2">
          <div className="items-center py-5 px-10">
            <img
              src={logo}
              alt=""
              className="ml-auto object-scale-down h-12"
            ></img>
          </div>
          <div className="lg:h-20 h-4 p-5">
            <img
              src={illustration}
              alt=""
              className="mx-auto object-fit w-1/2 lg:w-full"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
