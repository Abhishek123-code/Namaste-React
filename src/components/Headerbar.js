import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import PrfLogo from "../assests/Style=broken.png";
import CrtLogo from "../assests/cart.png";

const Headerbar = () => {
  let [btnName, setbtnName] = useState("Login");
  console.log("header render");

  const onlineStatus = useOnlineStatus();

  return (
    <header
      id="header"
      className="lg:bg-white sm:bg-yellow-50 shadow-md box-border"
    >
      <nav id="headerNav" className="flex justify-between items-center p-2 ">
        <img src={LOGO_URL} alt="logo" className="w-20" />

        <ul id="nav-list" className="flex justify-center items-center">
          <p className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
          <li className="w-20 flex justify-center hover:py-2 hover:text-lg hover:rounded-lg hover:text-orange-400 hover:font-semibold">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="w-28 flex justify-center hover:py-2 hover:text-lg hover:rounded-lg hover:text-orange-400 hover:font-semibold">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="w-28 flex justify-center hover:py-2 hover:text-lg hover:rounded-lg hover:text-orange-400 hover:font-semibold">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="w-24 hover:py-2 hover:text-lg hover:rounded-lg hover:text-orange-400 hover:font-semibold flex justify-center items-center">
            <img src={CrtLogo} className="pr-2" />
            Cart
          </li>
          <li className="px-4 bg-purple-300 py-2 mx-5 rounded-3xl w-34 hover:bg-green-400 duration-500 flex flex-wrap flex-row  justify-around items-center">
            <img src={PrfLogo} className="w-5 h-5" />
            <button
              className="w-16 flex justify-around"
              onClick={() =>
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headerbar;
