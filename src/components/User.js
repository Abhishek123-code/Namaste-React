import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count1] = useState(0);
  return (
    <div className="user">
        <h2>Count: {count}</h2>
        <h2>Count: {count1}</h2>
      <h2>Name: {props.name}</h2>
      <h3>location: {props.location}</h3>
      <h3>Contact: @aojha</h3>
    </div>
  );
};

export default User;
