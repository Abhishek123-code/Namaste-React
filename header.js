import React from "react";
import "./header.css"
import logo from "./reactLogo.svg";
import profileIcon from "./profileIcon.svg";

export default Headerbar = () => (
  <nav id="headerNav">
    <img src={logo} alt="logo" className="logo" />
    <input
      id="search"
      type="search"
      placeholder="Search Something..."
      className="search"
    />
    <img src={profileIcon} alt="profile-here" className="profilePic" />
  </nav>
);
