import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import "../../index.css";
import logo from "../../assets/fulllogo.png";
import illustration from "../../assets/login.svg";
import google from "../../assets/google.svg";

const Login = (props) => {
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   let email = e.target.elements.email?.value;
  //   let password = e.target.elements.password?.value;

  //   console.log(email, password);
  // };

  //
  // const submit = (e) => {
  //   // setLoading(true);
  //   // dispatch(AuthTypes.TOGGLE_LOADING());
  //   // props.loading();
  //   let credentials = { email, password };
  //   props.login(credentials);
  //   console.log(e);
  //   // history.push("/dash");
  //   // <Redirect to="/dash/" />;
  // };

  return (
    <div className="lg:flex">
      {/* {props.isLoggedIn ? <Redirect to="/dash/" /> : null} */}
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-4 antialiased mb-12 text-center">
              Welcome Back!
            </h1>
            <LoginForm />
            <div className="flex flex-wrap mt-3">
              <Link to="/dash" className="w-full">
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
              </Link>
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
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-purple-200 ml-auto">
        <div className="grid grid-rows-2">
          <div className="items-center py-5 px-10">
            <img
              src={logo}
              alt=""
              className="ml-auto object-scale-down h-12"
            ></img>
          </div>
          <div className="h-20 p-5">
            <img
              src={illustration}
              alt=""
              className="ml-auto mr-auto object-fit"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
