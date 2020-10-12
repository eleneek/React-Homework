import React, { useState, createContext } from "react";
import "./App.css";

import { UserInput } from "./components/UserInput.jsx";
import { UserOutput } from "./components/UserOutput.jsx";

export const usernameContext = createContext("");

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onChange = (target) => {
    setUsername(target);
    if (target.length === 50) {
      setError("*You reached the maxsimum number of characters");
    }
  };
  return (
    <div className="App">
      <usernameContext.Provider value={{username, error}}>
        <UserInput change={onChange} onBlurChange={onChange} />
        <UserOutput />
      </usernameContext.Provider>
    </div>
  );
}

export default App;
