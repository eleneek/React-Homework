import React, { useState } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [usernames] = useState(['asdasd','ghg']);

  const onChange = (event) => {
    return event.target.value;
  };
  return (
    <div className="App">
      <UserInput />
      <UserOutput props={usernames} />
    </div>
  );
}

export default App;
