import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../redux/actions";
import { Redirect } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/fulllogo.png";
import illustration from "../../assets/login.svg";
import google from "../../assets/google.svg";

const Login = () => {
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   let email = e.target.elements.email?.value;
  //   let password = e.target.elements.password?.value;

  //   console.log(email, password);
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const token = useSelector((state) => state.auth.user.token);
  const dispatch = useDispatch();
  const submit = () => {
    setLoading(true);
    console.log({ email, password });
    dispatch(AuthActions.login({ email, password }));
    <Redirect to="/dash/" />;
  };
  const token = useSelector((state) => state.auth.user.token);
  console.log(token);
  return (
    <div className="lg:flex">
      {token ? <Redirect to="/dash/" /> : null}
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-4 antialiased mb-12 text-center">
              Welcome Back!
            </h1>
            <form>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                  id="password"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-4">
                  <Link to="/forgot" className="w-full">
                    forgot password ?
                  </Link>
                </label>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  onClick={submit}
                  className={`w-full cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded border focus:outline-none focus:`}
                >{ loading ? "Login" : "Loading"}</button>
              </div>
            </form>
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
