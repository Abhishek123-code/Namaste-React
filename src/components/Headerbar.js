import {LOGO_URL} from "../utils/constants"

const Headerbar = () => (
  <header id="header">
    <nav id="headerNav">
      <img
        src={LOGO_URL}
        alt="logo"
        className="logo"
      />

      <ul id="nav-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </nav>
  </header>
);

export default Headerbar;