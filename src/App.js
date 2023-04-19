import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components.UserProfile"
import Posts from "./Posts.Post.js"
import Contacts from "./Contacts.ContactUserCard.js"
import "./index.css";

function App () {
  return <div>
    <NavBar></NavBar>
    <UserProfile></UserProfile>
    <Posts></Posts>
    <Contacts></Contacts> 
    <p>Hello, world!</p>;
    </div>

};

export default App;
