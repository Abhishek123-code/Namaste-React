import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name: "dummy",
        location: "default",
        avatar_url: ""
      }
    };

    // console.log(this.props.name + " Child constructor called");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child component did mount");
    const data=await fetch('https://api.github.com/users/abhishek123-code');
    const json=await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("comonent will unmount");
  }

  render() {

    // console.log(this.props.name + " child render called");
    const {name, location,avatar_url} =this.state.userInfo;
    return (
      <div className="user">
         <img src= {avatar_url}/>
         <h2>Name: {name}</h2>
         <h3>location: {location}</h3>
         <h3>Contact: @aojha</h3>
       </div>
    );
  }
}

export default Userclass;
