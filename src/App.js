import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App () {
  return (
  <div className="wrapper">

    <nav><NavBar /></nav>
    <div className="d-flex flex-row">
      <div className="userProfile">
        <UserProfile />
      </div>
      <div className="posts">
        <Posts />
      </div>
      <div className="d-flex flex-row-rev p-4 contacts">
        <Contacts />
      </div>
    </div>
  </div>
)
};


export default App;
