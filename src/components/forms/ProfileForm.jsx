import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthActions } from "../../redux/actions";
import Loader from "../loader";
import { CheckIcon } from "../../icons/index";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      authId: "",
      location: "",
      companyName: "",
      picture: "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-01.png?raw=true",
      maxLimit: 0,
      errors: {
        username: "Enter User Name!",
        password: "Enter Password!",
      },
      profilephotos: {
        male1:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-01.png?raw=true",
        male2:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-02.png?raw=true",
        male3:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-03.png?raw=true",
        male4:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-04.png?raw=true",
        female1:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-01.png?raw=true",
        female2:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-02.png?raw=true",
        female3:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-03.png?raw=true",
        female4:
          "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-female-04.png?raw=true",
      },
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.photoFormSubmit = this.photoFormSubmit.bind(this);
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

  logout = () => {
    this.props.logout();
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

  render() {
    let {
      name,
      email,
      authId,
      location,
      companyName,
      picture,
      maxLimit,
      profilephotos,
    } = this.state;

    if (!this.props.isLoading) {
      name = this.props.user.name;
      email = this.props.user.email;
      authId = this.props.user.authId;
      location = this.props.user.location;
      companyName = this.props.user.companyName;
      // picture = this.props.user.picture;
      maxLimit = this.props.user.maxLimit;
    }

    return this.props.isLoading ? (
      <div className="h-screen flex justify-center items-center">
        {" "}
        <Loader size="50" />{" "}
      </div>
    ) : (
      <div className="bg-gray-50 flex ">
        <div className=" bg-white p-5 border-2 rounded-xl mx-auto mt-20 mb-10 lg:w-1/2 md:w-3/5 sm:w-4/5">
          <div>
            <h1 className="lg:text-3xl md:text-xl font-medium antialiased text-left p-5">
              Profile
            </h1>
          </div>
          <div class="flex items-stretch space-x-12">
            <div class="flex-column justify-center items-stretch flex-1">
              <img
                src={picture}
                alt="my profile pic"
                class="rounded-lg object-scale-down"
              />
              <form onSubmit={this.photoFormSubmit}>
                {/* Male */}
                <h4 className="-mb-2 mt-3">Male</h4>
                <div className="my-2 flex flex-wrap">
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.male1
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.male1
                      }
                      value={profilephotos.male1}
                    />
                    <img
                      src={profilephotos.male1}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.male2
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.male2
                      }
                      value={profilephotos.male2}
                    />
                    <img
                      src={profilephotos.male2}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.male3
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.male3
                      }
                      value={profilephotos.male3}
                    />
                    <img
                      src={profilephotos.male3}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.male4
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.male4
                      }
                      value={profilephotos.male4}
                    />
                    <img
                      src={profilephotos.male4}
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
                        (this.state.selectedOption === profilephotos.female1
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.female1
                      }
                      value={profilephotos.female1}
                    />
                    <img
                      src={profilephotos.female1}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.female2
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.female2
                      }
                      value={profilephotos.female2}
                    />
                    <img
                      src={profilephotos.female2}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.female3
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.female3
                      }
                      value={profilephotos.female3}
                    />
                    <img
                      src={profilephotos.female3}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                  <label className="h-16 w-16 m-1 rounded-lg relative cursor-pointer">
                    <div
                      className={
                        (this.state.selectedOption === profilephotos.female4
                          ? "block "
                          : "hidden ") +
                        "rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center"
                      }
                    >
                      <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                    </div>
                    <input
                      type="radio"
                      id="image1"
                      className="top-0 w-full h-full absolute z-0 focus:outline-none appearance-none opacity-0"
                      onChange={this.onValueChange}
                      checked={
                        this.state.selectedOption === profilephotos.female4
                      }
                      value={profilephotos.female4}
                    />
                    <img
                      src={profilephotos.female4}
                      alt="my profile pic"
                      class="rounded-lg object-scale-down absolute z-0 top-0"
                      loading="lazy"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className={`w-full mb-4 cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none hover:bg-indigo-700`}
                >
                  change picture
                </button>
              </form>
            </div>
            {/* main form */}
            <form className="flex-1 min-w-min">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => this.inputChange(e)}
                  type="name"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(e) => this.inputChange(e)}
                  type="email"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyname" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => this.inputChange(e)}
                  type="companyname"
                  className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                  id="companyname"
                  placeholder="your store name"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="text-sm font-medium">
                  Location
                </label>
                <input
                  value={location}
                  onChange={(e) => this.inputChange(e)}
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
                  value={maxLimit}
                  onChange={(e) => this.inputChange(e)}
                  type="Max_Limit_of_Inventory"
                  className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="Max_Limit_of_Inventory"
                  placeholder="approx max capacity of your store"
                  required
                />
              </div>
              {/* save changes button */}
              <button
                type="submit"
                className={`w-full  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none hover:bg-indigo-700`}
              >
                save changes
              </button>
            </form>
          </div>
          {/* logout button */}
          <Link to="/">
            <button
              onClick={this.logout}
              className={`w-full transition-all duration-300 cursor-pointer bg-red-100 py-2 px-4 text-sm text-red-500 rounded-lg border focus:ring-2 hover:bg-red-500 hover:text-white`}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
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

const mapToStateDispatch = (dispatch) => {
  return {
    logout: () => dispatch(AuthActions.logout()),
    updateUser: (user) => dispatch(AuthActions.logout()),
  };
};

export default connect(mapToState, mapToStateDispatch)(UserInfo);
