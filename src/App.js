import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts";


function App () {
  // return <p>Hello, world! sup foo</p>;
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>  
  </div>;
};

export default App
