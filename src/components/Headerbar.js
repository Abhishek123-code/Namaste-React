import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
// import PrfLogo from "../assests/Stylebroken.png";
// import CrtLogo from "../assests/cart.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Headerbar = () => {
  let [btnName, setbtnName] = useState("Login");
  // console.log("header render");

  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);

  //subscribing to the store using our selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <header
      id="header"
      className="lg:bg-white sm:bg-yellow-50 shadow-md box-border max-w-full"
    >
      <nav
        id="headerNav"
        className="flex justify-between items-center p-2 box-border max-w-full"
      >
        <div className="box-border">
          <img src={LOGO_URL} alt="logo" className="w-20" />
        </div>

        <ul
          id="nav-list"
          className="flex justify-end items-center object-contain box-border"
        >
          <p className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
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
          <li className="w-28 hover:py-2 hover:text-lg hover:rounded-lg hover:text-orange-400 hover:font-semibold flex justify-center items-center">
            <Link className="link flex" to="/cart">
              {/* <img src={CrtLogo} className="pr-2" /> */}
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <li className="px-4 bg-purple-300 py-2 mx-5 rounded-3xl w-28 hover:bg-green-400 duration-500 ">
            <div className="flex flex-wrap flex-row  justify-around items-center">
              {/* <img src={PrfLogo} className="w-5 h-5" /> */}
              <button
                className="w-16 flex justify-around"
                onClick={() =>
                  btnName === "Login"
                    ? setbtnName("Logout")
                    : setbtnName("Login")
                }
              >
                {btnName}
              </button>
            </div>
          </li>
          <li className="w-32  flex justify-center items-center">
            {loggedUser}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headerbar;
