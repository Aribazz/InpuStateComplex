import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function updatefName(event) {
    const fNameUpdate = event.target.value;
    setfName(fNameUpdate);
  }
  function updatelName(event) {
    const lNameUpdate = event.target.value;
    setlName(lNameUpdate);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updatefName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updatelName}
          placeholder="Last Name"
          value={lName}
        />
        <button onClick={fName}>Submit</button>
      </form>
    </div>
  );
}

export default App;
