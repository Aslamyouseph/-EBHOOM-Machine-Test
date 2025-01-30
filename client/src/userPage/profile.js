import React from "react";
import Profile from "../userAccount/Profile/profile";
import Navbar from "../NavBar/NavBar";

function profile() {
  return (
    <div>
      {/*This is used to import the Navigation bar page*/}
      <Navbar />
      <Profile />
    </div>
  );
}

export default profile;
