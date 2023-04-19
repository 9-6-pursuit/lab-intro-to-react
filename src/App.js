import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App () {
  // return <p>Hello, test!</p>;
  return <div> 
    <NavBar></NavBar> 
    <UserProfile></UserProfile> 
    <Posts></Posts>
    <Contacts></Contacts>
    </div>
};

export default App;
