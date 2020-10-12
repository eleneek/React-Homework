import React from "react";
import { useState } from "react";

import "./UserComponent.css";

export const UserInput = ({ change }) => {
  const [subStr, setSubstr] = useState("");
  const onKeyDown = ({ target }) => {
    const length = target.value.length;
    if (length <= 50) {
      setSubstr(target.value);
      change(target.value);
    }

    if (length > 50) {
      setSubstr(target.value.substring(0, 50));
    }
  };

  const onBlurChange = ({ target }) => {
    change(target.value);
  };

  const labelStyle = {
    marginRight: "10px",
    color: "#5d00ad",
    fontWeight: "700",
  };

  const inputStyle = {
    width: "300px",
    height: " 30px",
    border: "2px solid #6c6a6e",
    borderRadius: "5px",
  };

  return (
    <div className='wrapper'>
      <label htmlFor="username" style={labelStyle}>
        Username
      </label>
      <input
        className="input"
        style={inputStyle}
        type="text"
        onBlur={onBlurChange}
        onChange={onKeyDown}
        value={subStr}
      />
    </div>
  );
};
