import React from "react";
import ReactDOM from "react-dom/client";
import Headerbar from "./components/Headerbar";
import Body from "./components/Body";

const AppLayout = () => (
  <>
    <Headerbar />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
