import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Headerbar = () => {
  let [btnName, setbtnName] = useState("Login");
  console.log("header render");
  return (
    <header id="header">
      <nav id="headerNav">
        <img src={LOGO_URL} alt="logo" className="logo" />

        <ul id="nav-list">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Headerbar;
