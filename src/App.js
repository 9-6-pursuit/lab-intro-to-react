import React from "react";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import "./index.css";

function App () {
  return <div>
    <NavBar></NavBar>
    <div className="container">
      <div className="left-column">
        <UserProfile></UserProfile>
        <Posts></Posts>
      </div>
      <div className="right-column">
       <Contacts></Contacts>
       </div>
    </div>
  </div>
};

export default App;
