import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";

function App () {
  // return <p>Hello there</p>;
  return <div>
          <NavBar></NavBar>
          <UserProfile></UserProfile>
          <Posts></Posts>
          <Contacts></Contacts>
        </div>
};

export default App;
