import React from "react";
import { useContext } from "react";
import { usernameContext } from "../App";

import "./UserComponent.css";

export const UserOutput = () => {
  const username = useContext(usernameContext);
  return (
    <div className="output-container">
      <h1>{username.username}</h1>
      <p className="error-message">{username.error}</p>
    </div>
  );
};
