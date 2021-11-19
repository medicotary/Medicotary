import React, { useState } from "react";
import "../index.css";
import Header from "../components/header_advance";
import { Link } from "react-router-dom";
import { AuthActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

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

  //Update password
  const updatePassword = () => {
    // dispatch(AuthActions.update());
    // console.log("logout");
  };

  return (
    <div>
      <Header />
      <div className=" w-4/7 bg-gray-50 flex ">
        <div class="grid grid-flow-row grid-rows-2 items-center ml-auto mr-auto">
          {/* top section */}
          <div className=" bg-white p-5 border-2 rounded-xl mt-20  ">
            <div class="grid grid-flow-row grid-row-3">
              <div>
                <h1 className="text-3xl font-medium mt-8 antialiased text-left p-5">
                  Profile
                </h1>
              </div>
              <div class="grid grid-rows-3 grid-flow-col mt-3">
                <div class="row-span-2 ">
                  <div className="">
                    <img
                      src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
                      alt=""
                      class="rounded w-1/2  object-scale-down"
                    />
                  </div>
                  <div className="flex items-center p-3">
                    <button
                      className={`w-1/2  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                    >
                      Upload Photo
                    </button>
                  </div>
                  <div className="flex items-center py-2 px-3">
                    <button
                      className={`w-1/2  cursor-pointer bg-red-500 py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                    >
                      Remove Photo
                    </button>
                  </div>
                </div>
                <div class="row-span-4 cols-start-2">
                  <div className="justify-center">
                    <form>
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
                          placeholder="johndoe@gmail.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="companyname"
                          className="text-sm font-medium"
                        >
                          Company Name
                        </label>
                        <input
                          value={ccompanyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          type="companyname"
                          className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                          id="companyname"
                          placeholder="Huma Medical Store"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="location"
                          className="text-sm font-medium"
                        >
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
                          placeholder="Delhi,NCR"
                        />
                      </div>
                      <button
                        className={`w-full  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button
                  onClick={logout}
                  className={`w-full  cursor-pointer bg-red-500 py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
          {/* password section */}
          <div className="w-full border-2 rounded-xl flex bg-white p-7 ">
            <div className="grid grid-flow-row grid-row-3">
              <div>
                <label htmlFor="old_password" className="text-sm font-medium">
                  Old Password
                </label>
                <input
                  type="old_password"
                  className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="old_password"
                  placeholder="***************"
                />
              </div>
              <div className="w-full">
                <label htmlFor="new_password" className="text-sm font-medium">
                  New Password
                </label>
                <input
                  type="new_password"
                  className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="new_password"
                  placeholder="***************"
                />
              </div>
              <div className="flex">
                <button
                  className={`w-full  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  change password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

//{
/* <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">1</div>
  <div class="col-span-2 ...">2</div>
  <div class="row-span-2 col-span-2 ...">3</div>
</div><div className="grid grid-row-3">
            <div>
              
            </div>
            <div className="mt-3 justify-center items-center">
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <div className="flex justify-center">
                    <img
                      src="https://pbs.twimg.com/profile_images/1378272639379144705/bOkqlvA6_400x400.jpg"
                      alt=""
                      class="rounded w-1/2 object-scale-down"
                    />
                  </div>
                  <div className="flex justify-center items-center p-3">
                    <button
                      className={`w-1/2  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                    >
                      Upload Photo
                    </button>
                  </div>
                  <div className="flex justify-center items-center py-2 px-3">
                    <button
                      className={`w-1/2  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                    >
                      Remove Photo
                    </button>
                  </div>
                </div>
                <div className="justify-center p-4">
                  <form>
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
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
                        type="email"
                        className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                        id="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="companyname"
                        className="text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        type="companyname"
                        className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
                        id="companyname"
                        placeholder="Huma Medical Store"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <input
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
                        type="Max_Limit_of_Inventory"
                        className={`w-full p-2 text-primary border rounded outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id="Max_Limit_of_Inventory"
                        placeholder="Delhi,NCR"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex">
                  <button
                    className={`w-1/2  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                  >
                    Logout
                  </button>
                </div>

              <div className="flex">
                <button
                  className={`w-1/2  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 w-full flex"></div> */
//}
