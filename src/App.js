import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import "./index.css";

function App () {
  // return <p>Hello, 4K!</p>;
  return <div>
    <NavBar></NavBar> 
    <UserProfile></UserProfile>
    <Posts></Posts>
  </div>;
};

export default App;
