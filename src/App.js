import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js"
import "./index.css";
import Contacts from "./Components/Contacts";

function App () {
  // return <p>Hey, how is your day going?</p>;
  return <div> 
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>
    
    
     </div>;
};

export default App;
