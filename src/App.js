import React from "react";
import NavBar from './Components/NavBar.js'
import Posts from './Components/Posts.js'
import Contacts from './Components/Contacts.js'
import UserProfile from './Components/UserProfile.js'
import "./index.css";

function App () {
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>
  </div>;
};

export default App;
