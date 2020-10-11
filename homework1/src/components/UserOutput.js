import React from "react";
function UserOutput(props) {
  return (
    <div>
      <div>
        {props.props.map((username, i) => {
          return <h1 key={i}>{username}</h1>;
        })}
      </div>
    </div>
  );
}

export default UserOutput;
