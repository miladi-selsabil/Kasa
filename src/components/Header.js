import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";
import "./../index.css";

function Header() {
  return (
    <header>
      <div className="header-section">
        <img src={logo} alt="Logo" />
        <nav>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline #ff6060" : "",
              };
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline #ff6060" : "",
              };
            }}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
