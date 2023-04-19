import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import "./index.css";
import Contacts from "./Components/Contacts.js";

function App () {
  // return <p>Hello, brothers and sisters!</p>;
  // return <NavBar></NavBar>;
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>
  </div>
};

export default App;
