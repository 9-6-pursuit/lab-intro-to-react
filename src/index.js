/** @format */

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
let root = document.getElementById("root");
ReactDOM.render(
	<App>
		<NavBar />
        <UserProfile />
		<Posts>
			<h2>Posts</h2>
			<Post />
			<Post />
			<Post />
		</Posts>
		<Contacts>
			<ContactUserCard />
			<ContactUserCard />
			<ContactUserCard />
			<ContactUserCard />
		</Contacts>
	</App>,
	root
);
