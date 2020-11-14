import React, { useState, useContext } from "react";
import "../index.css";
import { usersContext } from "../Context/usersContext";

function Input() {
  const [input, setInput] = useState("");

  return (
    <div className="input">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-input"
          placeholder="Search for user"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
    </div>
  );
}

export default Input;
