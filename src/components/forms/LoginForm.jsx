import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthActions } from "../../redux/actions";
import Loader from "../loader";
import { EyeIcon, EyeOffIcon } from "../../icons/index";
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hidepassword: true,
      errors: {
        username: "Enter User Name!",
        password: "Enter Password!",
      },
    };
  }

  // password hide and show
  handleClickShowPassword = () => {
    this.setState({ hidepassword: !this.state.hidepassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <div>
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
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div
            className={`password w-full flex p-0 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out  `}
          >
            <input
              name="password"
              value={password}
              onChange={(e) => this.inputChange(e)}
              type={this.state.hidepassword ? "password" : "text"}
              className={`w-full p-2 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out `}
              id="password"
              placeholder="Your Password"
              required
            />
            <button
              className="pr-2"
              type="button"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.hidepassword ? (
                <EyeIcon stroke="#a39ab6" />
              ) : (
                <EyeOffIcon stroke="#a39ab6" />
              )}
            </button>
          </div>
          {password.length < 8 && password.length >= 1 ? (
            <div className="text-error text-xs py-1 font-medium">
              {" "}
              the password should be more than 8 charecters{" "}
            </div>
          ) : null}
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
              className={`w-full cursor-pointer justify-center items-center bg-primary hover:bg-indigo-700 transition-all py-2 px-4 rounded border focus:outline-none`}
            >
              <div className=" text-sm text-white">Login</div>
            </button>
          </div>
        ) : (
          <div className="flex mt-6">
            <button
              className={`w-full flex cursor-pointer justify-center items-center bg-primary hover:bg-indigo-700 transition-all py-2 px-4 rounded border focus:outline-none`}
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
