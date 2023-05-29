import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App () {
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
  </div>;
};

export default App;
