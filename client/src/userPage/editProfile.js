import React from "react";
import EditProfile from "../userAccount/editProfile/editProfile";
import Navbar from "../NavBar/NavBar";

function editProfile() {
  return (
    <div>
      {/*This is used to import the Navigation bar page*/}
      <Navbar />
      <EditProfile />
    </div>
  );
}

export default editProfile;
