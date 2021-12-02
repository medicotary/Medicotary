import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { VendorActions } from "../../redux/actions";
import Loader from "../loader";
import { CheckIcon } from "../../icons/index";

class EditVendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      picture: "",
      selectedOption: "",
      photos: {
        male1:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-01.png?raw=true",
        male2:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-02.png?raw=true",
        male3:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-03.png?raw=true",
        male4:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-04.png?raw=true",
        male5:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-05.png?raw=true",
        male6:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-06.png?raw=true",
        female1:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-01.png?raw=true",
        female2:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-02.png?raw=true",
        female3:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-03.png?raw=true",
        female4:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-04.png?raw=true",
        female5:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-05.png?raw=true",
        female6:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-06.png?raw=true",
      },

      errors: {
        name: "Enter Name!",
      },
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.photoFormSubmit = this.photoFormSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
      picture: event.target.value,
    });
  }

  photoFormSubmit(event) {
    this.setState({
      picture: this.state.selectedOption,
    });
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  };

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.name = value.length < 1 ? "Enter Name" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };
  clearForm = (event) => {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      picture: "",
      selectedOption: "",
    });
  };

  submitForm = async (event) => {
    event.preventDefault();
    let data = {};
    data.data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phoneNumber,
      description: this.state.description,
      picture: this.state.picture
        ? this.state.picture
        : this.props.user.picture,
    };
    data.token = this.props.token;
    console.log(data.data, data.token);
    this.props.dispatch(VendorActions.addVendor(data));
    this.clearForm(event);
  };

  render() {
    const { name, email, phoneNumber, description, photos } = this.state;

    return (
      <div className=" mt-auto w-4/5 p-20 bg-gray-50 ml-auto">
        <h1 className="font-bold text-2xl">Edit this Vendor</h1>
        <div className="mt-2">
          <div className="flex flex-row justify-between">
            <div className="">
              <div class="flex flex-col">
                <div className="flex">
                  <form onSubmit={this.photoFormSubmit}>
                    <h4 className="font-bold text-lg">Change Image</h4>
                    {/* Male */}
                    <h4 className="-mb-2 mt-2">Male</h4>
                    <div className="my-2 flex flex-wrap">
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male1
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male1}
                          value={photos.male1}
                        />
                        <img
                          src={photos.male1}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male2
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male2}
                          value={photos.male2}
                        />
                        <img
                          src={photos.male2}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male3
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male3}
                          value={photos.male3}
                        />
                        <img
                          src={photos.male3}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male4
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male4}
                          value={photos.male4}
                        />
                        <img
                          src={photos.male4}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male5
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male5}
                          value={photos.male5}
                        />
                        <img
                          src={photos.male5}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.male6
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.male6}
                          value={photos.male6}
                        />
                        <img
                          src={photos.male6}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                    </div>
                    {/* Female */}
                    <h4 className="-mb-2 mt-3">Female</h4>
                    <div className="my-2 flex flex-wrap">
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female1
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female1}
                          value={photos.female1}
                        />
                        <img
                          src={photos.female1}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female2
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female2}
                          value={photos.female2}
                        />
                        <img
                          src={photos.female2}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female3
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female3}
                          value={photos.female3}
                        />
                        <img
                          src={photos.female3}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female4
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female4}
                          value={photos.female4}
                        />
                        <img
                          src={photos.female4}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female5
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female5}
                          value={photos.female5}
                        />
                        <img
                          src={photos.female5}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                      <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                        <div
                          className={
                            (this.state.selectedOption === photos.female6
                              ? "block "
                              : "hidden ") +
                            "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                          }
                        >
                          <CheckIcon
                            stroke="white"
                            className="h-8 w-8"
                          ></CheckIcon>
                        </div>
                        <input
                          type="radio"
                          id="image1"
                          className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                          onChange={this.onValueChange}
                          checked={this.state.selectedOption === photos.female6}
                          value={photos.female6}
                        />
                        <img
                          src={photos.female6}
                          alt="my profile pic"
                          class="rounded-lg object-scale-down absolute z-0 top-0"
                          loading="lazy"
                        />
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full px-10">
              <form>
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    value={name}
                    name="name"
                    onChange={(e) => this.inputChange(e)}
                    type="text"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="name"
                    placeholder="Jhon Doe"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    value={email}
                    name="email"
                    onChange={(e) => this.inputChange(e)}
                    type="email"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                  {!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
                  email.length >= 4 ? (
                    <div className="text-error text-xs py-1 font-medium">
                      {" "}
                      enter a valid email{" "}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="phone_number" className="text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => this.inputChange(e)}
                    type="tel"
                    name="phoneNumber"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="phone_number"
                    placeholder="987654321"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => this.inputChange(e)}
                    type="text"
                    rows="3"
                    name="description"
                    className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                    id="description"
                    placeholder="Enter some description about the vendor"
                  />
                </div>

                <div class="flex flex-row justify-between mt-2">
                  <div className="py-5">
                    <Link to="/products" class="w-full">
                      <button
                        onClick={this.clearForm}
                        className={`w-full cursor-pointer py-2 px-12 text-sm text-primary rounded-lg border border-primary focus:outline-none focus:`}
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                  {this.props.isLoading ? (
                    <div className="py-5">
                      <button
                        className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                      >
                        <Loader color="#fff" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-5">
                      <button
                        type="submit"
                        onClick={this.submitForm}
                        className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToState = (state) => {
  return {
    token: state.auth.user.token,
    isLoading: state.vendor.isLoading,
    isError: state.vendor.isError,
  };
};

export default connect(mapToState)(EditVendorForm);
