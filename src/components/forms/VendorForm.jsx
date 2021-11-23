import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { VendorActions } from "../../redux/actions";
import Loader from "../loader";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      errors: {
        name: "Enter User Name!",
      },
    };
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
        errors.name = value.length < 1 ? "Enter User Name" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.props.dispatch();
  };

  render() {
    const { name, email, phoneNumber, description } = this.state;

    return (
      <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
        <div className="mt-12">
          <div className="flex flex-row justify-center">
            <div className="w-1/3">
              <div class="flex flex-col mt-3">
                <div className="flex">
                  <div className="">
                    <img
                      src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
                      alt=""
                      class="rounded w-2/3  object-scale-down"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="py-3">
                    {/* <Link to="/login" class="w-full"> */}
                    <button
                      className={`w-2/3 border bg-primary text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                    >
                      Browse Photos
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="">
                  <div className="">
                    {/* <Link to="/login" class="w-full"> */}
                    <button
                      className={`w-2/3 border bg-error text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                    >
                      Remove Photo
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-10">
              <form>
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => this.inputChange(e)}
                    type="name"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="name"
                    placeholder="Manas Gupta"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => this.inputChange(e)}
                    type="email"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                    id="email"
                    placeholder="manasgupta1820@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => this.inputChange(e)}
                    type="phone_number"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="phone_number"
                    placeholder="+91 9666666666"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => this.inputChange(e)}
                    type="description"
                    rows="3"
                    className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="description"
                    placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
                  />
                </div>

                <div class="flex flex-row justify-between ">
                  <div className="py-5">
                    {/* <Link to="/login" class="w-full"> */}
                    <button
                      onClick={this.props.submitForm}
                      className={`w-full border bg-primary text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                    >
                      Add Vendor
                    </button>
                    {/* </Link> */}
                  </div>
                  <div className="py-5">
                    {/* <Link to="/signup" class="w-full"> */}
                    <button
                      className={`w-full cursor-pointer py-2 px-12 text-sm text-primary rounded-lg border border-primary focus:outline-none focus:`}
                    >
                      Cancel
                    </button>
                    {/* </Link> */}
                  </div>
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
    token: state.auth.token,
    isLoading: state.product.isLoading,
    isError: state.product.isError,
  };
};

export default connect(mapToState)(ProductForm);
