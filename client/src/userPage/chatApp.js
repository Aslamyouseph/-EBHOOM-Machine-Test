import React from "react";
import Chatapp from "../chatApp/chatApp";
import Navbar from "../NavBar/NavBar";
function ChatApp() {
  return (
    <div>
      {/*This is used to import the Navigation bar page*/}
      <Navbar />
      <Chatapp />
    </div>
  );
}

export default ChatApp;
