import React, { useState } from "react";
import "../index.css";
import Header from "../components/header_advance";
import { Link } from "react-router-dom";
import { AuthActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { UploadIcon } from "../icons/index";
import axios from "axios";

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
  // file upload code

  let state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  let onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  let onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-50 flex ">
        {/* top section */}
        <div className=" bg-white p-5 border-2 rounded-xl w-3/5 mx-auto mt-20 mb-10">
          <div>
            <h1 className="text-3xl font-medium antialiased text-left p-5">
              Profile
            </h1>
          </div>
          <div class="flex items-stretch space-x-12">
            <div class="flex-column justify-center items-stretch flex-1">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/82b8e9101650903.5f2369beab58a.jpg"
                alt="my profile pic"
                class="rounded-lg object-scale-down"
              />
              <div className="flex items-center py-2 w-full">
                <input type="file" onChange={onFileChange} />
                <button
                  onClick={onFileUpload}
                  className={` cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  <UploadIcon />
                </button>
              </div>
              <div className="flex items-center py-2 w-full">
                <button
                  className={` cursor-pointer bg-red-500 py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  Remove Photo
                </button>
              </div>
            </div>
            {/* main form */}
            <form className="flex-1">
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
                <label htmlFor="companyname" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  value={ccompanyName}
                  onChange={(e) => setCompanyName(e.target.value)}
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
                  placeholder="approx max capacity of your store"
                />
              </div>
              {/* save changes button */}
              <button
                className={`w-full  cursor-pointer bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
              >
                save changes
              </button>
            </form>
          </div>
          {/* logout button */}
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
