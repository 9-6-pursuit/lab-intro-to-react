import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App () {
  return (
  <>
    <NavBar />
    <UserProfile />    
    <Posts />
    <Contacts />
  </>
)
};


export default App;
