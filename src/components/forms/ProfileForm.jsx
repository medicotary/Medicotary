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
      picture: "",
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

  render() {
    let { name, email, authId, location, companyName, picture, maxLimit, profilephotos } =
      this.state;

    if (!this.props.isLoading) {
      name = this.props.user.name;
      email = this.props.user.email;
      authId = this.props.user.authId;
      location = this.props.user.location;
      companyName = this.props.user.companyName;
      // picture = this.props.user.picture;
      maxLimit = this.props.user.maxLimit;
    }
    picture = profilephotos.male3

    return this.props.isLoading ? (
      <div className="h-screen flex justify-center items-center">
        {" "}
        <Loader size="50" />{" "}
      </div>
    ) : (
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
                src={picture}
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
                    src={profilephotos.male1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" block rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.male2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.male3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.male4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
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
                    src={profilephotos.female1}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.female2}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.female3}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
                  />
                </button>
                <button className="h-16 w-16 m-1 rounded-lg relative">
                  <div className=" hidden rounded-lg top-0 w-full h-full bg-gray-700 bg-opacity-60 absolute z-10 flex items-center justify-center">
                    <CheckIcon stroke="white" className="h-8 w-8"></CheckIcon>
                  </div>
                  <img
                    src={profilephotos.female4}
                    alt="my profile pic"
                    class="rounded-lg object-scale-down absolute z-0 top-0 "
                    loading="lazy"
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
