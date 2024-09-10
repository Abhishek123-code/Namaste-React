import React from "react";
import User from "./User";
import Userclass from "./Userclass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("Parent render called");
    return (
      <div className="aboutUs">
        <h1>This is About Us Page</h1>
        <Userclass name="First" location="Gurugram" />
      </div>
    );
  }
}

export default About;
