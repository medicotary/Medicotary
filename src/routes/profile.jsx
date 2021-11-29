import React, { useState } from "react";
import "../index.css";
import Header from "../components/header_advance";
import { Link } from "react-router-dom";
import { AuthActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CheckIcon } from "../icons/index";
import PhotoMale1 from "../assets/profile photos/toy faces-male-01.png";
import PhotoMale2 from "../assets/profile photos/toy faces-male-02.png";
import PhotoMale3 from "../assets/profile photos/toy faces-male-03.png";
import PhotoMale4 from "../assets/profile photos/toy faces-male-04.png";
import PhotoMale5 from "../assets/profile photos/toy faces-male-05.png";
import PhotoMale6 from "../assets/profile photos/toy faces-male-06.png";
import PhotoFemale1 from "../assets/profile photos/toy faces-female-01.png";
import PhotoFemale2 from "../assets/profile photos/toy faces-female-02.png";
import PhotoFemale3 from "../assets/profile photos/toy faces-female-03.png";
import PhotoFemale4 from "../assets/profile photos/toy faces-female-04.png";
import PhotoFemale5 from "../assets/profile photos/toy faces-female-05.png";
import PhotoFemale6 from "../assets/profile photos/toy faces-female-06.png";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.auth.user.user);
  const { name, authId, location, email, companyName, picture, maxLimit } =
    user;
  const [cemail, setEmail] = useState(email);
  const [clocation, setLocation] = useState(location);
  const [ccompanyName, setCompanyName] = useState(companyName);
  const [cname, setName] = useState(name ? name : "John Doe");
  const [cmaxLimit, setMaxLimit] = useState(maxLimit ? maxLimit : 0);
  const dispatch = useDispatch();

  // Logout function
  const logout = () => {
    dispatch(AuthActions.logout());
    console.log("logout");
  };

  // Update profile info
  const updateProfile = () => {
    console.log(cname, clocation, cemail, ccompanyName, cmaxLimit);
    dispatch(AuthActions.update());
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-50 flex ">
        <div className=" bg-white p-5 border-2 rounded-xl w-1/2 mx-auto mt-20 mb-10">
          <div>
            <h1 className="text-3xl font-medium antialiased text-left p-5">
              Profile
            </h1>
          </div>
          <div class="flex items-stretch space-x-12">
            <div class="flex-column justify-center items-stretch flex-1">
              <img
                src={PhotoMale2}
                alt="my profile pic"
                class="rounded-lg object-scale-down"
              />
              {/* Male */}
              <h4 className="-mb-2 mt-3">Male</h4>
              <div className="my-2 flex flex-wrap">
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoMale1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" block rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoMale2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoMale3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoMale4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
              </div>
              {/* Female */}
              <h4 className="-mb-2 mt-3">Female</h4>
              <div className="my-2 flex flex-wrap">
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoFemale1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoFemale2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoFemale3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={PhotoFemale4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                  />
                </button>
              </div>
            </div>
            {/* main form */}
            <form className="flex-1 min-w-min">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  value={cname}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  value={cemail}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="companyname" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  value={ccompanyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="companyname"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="companyname"
                  placeholder="your store name"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-sm font-medium">
                  Location
                </label>
                <input
                  value={clocation}
                  onChange={(e) => setLocation(e.target.value)}
                  type="location"
                  className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="location"
                  placeholder="Delhi,NCR"
                />
              </div>
              <div>
                <label
                  htmlFor="Max_Limit_of_Inventory"
                  className="text-sm font-medium"
                >
                  Max Limit of Inventory
                </label>
                <input
                  value={cmaxLimit}
                  onChange={(e) => setMaxLimit(e.target.value)}
                  type="Max_Limit_of_Inventory"
                  className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="Max_Limit_of_Inventory"
                  placeholder="approx max capacity of your store"
                />
              </div>
              {/* save changes button */}
              <button
                className={`w-full  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none hover:bg-indigo-700`}
              >
                save changes
              </button>
            </form>
          </div>
          {/* logout button */}
          <Link to="/">
            <button
              onClick={logout}
              className={`w-full transition-all duration-300 cursor-pointer bg-red-100 py-2 px-4 text-sm text-red-500 rounded-lg border focus:ring-2 hover:bg-red-500 hover:text-white`}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;