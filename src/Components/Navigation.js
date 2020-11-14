import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../index.css";

function Navigation() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/users">Users</Link>
        <Link to="/repos">Your Repository</Link>
      </div>
    </div>
  );
}

export default Navigation;
