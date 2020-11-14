import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link style={{ textDecoration: "none" }} to="/" exact="true">
      <div className="header">
        <h1>Github Finder</h1>
      </div>
    </Link>
  );
}

export default Header;
