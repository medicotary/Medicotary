import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthActions } from "../redux/actions";
import Loader from "./loader";
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username = value.length < 1 ? "Enter User Name" : "";
        break;
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
    console.log(this.state.email, this.state.password);
    // this.props.dispatch(AuthTypes.TOGGLE_LOADING);
    this.props.dispatch(
      AuthActions.login({
        email: this.state.email,
        password: this.state.password,
      })
    );
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            value={email}
            required
            name="email"
            onChange={(e) => this.inputChange(e)}
            type="email"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            name="password"
            value={password}
            onChange={(e) => this.inputChange(e)}
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
            id="password"
            placeholder="Your Password"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-4">
            <Link to="/forgot" className="w-full">
              forgot password ?
            </Link>
          </label>
        </div>
        {!this.props.isLoading ? (
          <div className="flex mt-6">
            <button
              type="submit"
              onClick={this.submitForm}
              className={`w-full cursor-pointer justify-center items-center bg-primary py-2 px-4 rounded border focus:outline-none`}
            >
              <div className=" text-sm text-white">Login</div>
            </button>
          </div>
        ) : (
          <div className="flex mt-6">
            <button
              className={`w-full cursor-pointer justify-center items-center bg-primary py-2 px-4 rounded border focus:outline-none`}
            >
              <div className="justify-self-center">
                <Loader color="#ffffff" />
              </div>
            </button>
          </div>
        )}
        {this.props.error.length > 0 && !this.props.isLoading ? (
          <p className="text-error text-sm text-center py-1 font-medium">
            {this.props.error}
          </p>
        ) : null}
      </form>
    );
  }
}

const mapToState = (state) => {
  return {
    error: state.auth.errorMessage,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapToState)(UserInfo);
