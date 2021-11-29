import React, { useState } from "react";
import "../index.css";
import Header from "../components/header_advance";
import { Link } from "react-router-dom";
import { AuthActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "./../components/forms/ProfileForm";
// import { CheckIcon } from "../icons/index";
// import PhotoMale1 from "../assets/profile photos/toy faces-male-01.png";
// import PhotoMale2 from "../assets/profile photos/toy faces-male-02.png";
// import PhotoMale3 from "../assets/profile photos/toy faces-male-03.png";
// import PhotoMale4 from "../assets/profile photos/toy faces-male-04.png";
// import PhotoFemale1 from "../assets/profile photos/toy faces-female-01.png";
// import PhotoFemale2 from "../assets/profile photos/toy faces-female-02.png";
// import PhotoFemale3 from "../assets/profile photos/toy faces-female-03.png";
// import PhotoFemale4 from "../assets/profile photos/toy faces-female-04.png";

const Profile = () => {
  // const user = useSelector((state) => state.auth.user.user);
  // const { name, authId, location, email, companyName, picture, maxLimit } =
  //   user;
  // const [cemail, setEmail] = useState(email);
  // const [clocation, setLocation] = useState(location);
  // const [ccompanyName, setCompanyName] = useState(companyName);
  // const [cname, setName] = useState(name ? name : "John Doe");
  // const [cmaxLimit, setMaxLimit] = useState(maxLimit ? maxLimit : 0);
  // const dispatch = useDispatch();

  // Logout function

  // Update profile info
  // const updateProfile = () => {
  //   console.log(cname, clocation, cemail, ccompanyName, cmaxLimit);
  //   dispatch(AuthActions.update());
  // };

  return (
    <div>
      <Header />
      <ProfileForm />
    </div>
  );
};

export default Profile;
