import React from "react";
import Login from "../userAccount/login/login";
import Navbar from "../NavBar/NavBar";

function login() {
  return (
    <div>
      {/*This is used to import the Navigation bar page*/}
      <Navbar />
      <Login />
    </div>
  );
}

export default login;
