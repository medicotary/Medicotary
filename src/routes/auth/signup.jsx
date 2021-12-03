import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/fulllogo.png";
import illustration from "../../assets/signup.svg";
import google from "../../assets/google.svg";
import SignupForm from "../../components/forms/SignupForm";
const Signup = () => {
  return (
    <div className="lg:flex">
      {/* {token ? <Redirect to="/dash/" /> : null} */}
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-purple-200 mr-auto">
        <div class="grid grid-rows-2">
          <div class="items-center py-5 px-10">
            <img
              src={logo}
              alt=""
              className="mr-auto object-scale-down h-12"
            ></img>
          </div>
          <div class="h-20 p-5">
            <img
              src={illustration}
              alt=""
              className="ml-auto mr-auto object-fit"
            ></img>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-1 antialiased mb-6 text-center">
              Welcome
            </h1>
            <SignupForm />
            <div className="flex flex-wrap mt-3">
              {/* <Link to="/dash" class="w-full">
                <button
                  className={`w-full cursor-pointer rounded-lg border py-2 px-4 focus:outline-none `}
                >
                  <div class="flex flex-row justify-center">
                    <div class="h-5 px-2">
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
              Already a member?{" "}
              <Link to="/login" class="text-secondary">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
