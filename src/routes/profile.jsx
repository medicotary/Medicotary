import React from "react";
import "../index.css";
import Header from "../components/header";
import ProfileForm from "./../components/forms/ProfileForm";

const Profile = () => {
  return (
    <div>
      <Header back="true" />
      <ProfileForm />
    </div>
  );
};

export default Profile;
