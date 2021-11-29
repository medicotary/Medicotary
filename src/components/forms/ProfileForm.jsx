import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthActions } from "../../redux/actions";
import Loader from "../loader";
import { useDispatch, useSelector } from "react-redux";

import { CheckIcon } from "../icons/index";
import PhotoMale1 from "../assets/profile photos/toy faces-male-01.png";
import PhotoMale2 from "../assets/profile photos/toy faces-male-02.png";
import PhotoMale3 from "../assets/profile photos/toy faces-male-03.png";
import PhotoMale4 from "../assets/profile photos/toy faces-male-04.png";
import PhotoFemale1 from "../assets/profile photos/toy faces-female-01.png";
import PhotoFemale2 from "../assets/profile photos/toy faces-female-02.png";
import PhotoFemale3 from "../assets/profile photos/toy faces-female-03.png";
import PhotoFemale4 from "../assets/profile photos/toy faces-female-04.png";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: email,
      name: name ? name : "Enter name",
      authId: "",
      location: location,
      companyName: companyName,
      picture: "",
      maxLimit: maxLimit ? maxLimit : 0,
      errors: {
        username: "Enter User Name!",
        password: "Enter Password!",
      },
    };
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  };

  // Update profile info
  updateProfile = () => {
    console.log(this.state.name, this.state.location);
    // dispatch(AuthActions.update());
  };

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "password":
        errors.password = value.length < 1 ? "Enter Password" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  submitForm = async (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <div>
          <h1 className="text-3xl font-medium antialiased text-left p-5">
            Profile
          </h1>
        </div>
        <div class="flex items-stretch space-x-12">
          {/* profile photo section */}
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
          <div className="flex-1 min-w-min">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                value={this.state.name}
                onChange={(e) => this.inputChange(e.target.value)}
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
                value={this.state.email}
                onChange={(e) => this.inputChange(e.target.value)}
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
                value={this.state.companyName}
                onChange={(e) => this.inputChange(e.target.value)}
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
                value={this.state.location}
                onChange={(e) => this.inputChange(e.target.value)}
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
                value={this.state.maxLimit}
                onChange={(e) => this.inputChange(e.target.value)}
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
          </div>
        </div>
      </form>
    );
  }
}

const mapToState = (state) => {
  return {
    error: state.auth.errorMessage,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user.user,
  };
};

export default connect(mapToState)(UserInfo);
