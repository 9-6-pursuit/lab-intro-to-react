import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";


function App () {
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Contacts></Contacts>
    <Posts></Posts>
  </div>
};

export default App;
