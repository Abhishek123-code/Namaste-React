import React from "react";
import ReactDOM from "react-dom/client";
import Headerbar from "./header.js";

const elem = <span>React Element</span>;

const Jsxheading = (
  <h1 className="head">
    {elem}
    Namaste React using jsx 🚀
  </h1>
);

const data=10000;

const HeadingComponent = () => (
  <div id="container">
    {data}
    <h1 className="heading">Namste Reace Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

const rootHeader=ReactDOM.createRoot(document.getElementById("header"));

rootHeader.render(<Headerbar />)