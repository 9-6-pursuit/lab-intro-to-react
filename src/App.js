import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App () {
  return (
  <>
    <p>Hello, world! What up?</p>
    <NavBar />
    <UserProfile />
    <Contacts />
    <Posts />
  </>
)
};


export default App;
