import React from "react";
// relative file path
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js"
import Posts from "./Components/Posts.js"
import Contacts from "./Components/Contacts.js"
import "./index.css";

function App () {
// return <p>Hello, everybody- how's it going tonight?</p>;
// can be blank tags<>
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts>
    </div>;
};

export default App;
