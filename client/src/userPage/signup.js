import React from "react";
import Signup from "../userAccount/signUp/signUp";
import Navbar from "../NavBar/NavBar";

function SignUp() {
  return (
    <div>
      {/*This is used to import the Navigation bar page*/}
      <Navbar />
      <Signup />
    </div>
  );
}

export default SignUp;
