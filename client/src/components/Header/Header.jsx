import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <ul className="header">
        <li>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className="navlink">
            Logout
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
