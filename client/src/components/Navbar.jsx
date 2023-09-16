import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="navbar-nav ml-auto">
          {" "}
          {/* Right-aligned Links */}
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/homepage">
              <i className="fas fa-home"></i> HOMEPAGE
            </Link>
            <Link className="nav-item nav-link" to="/about">
              <i className="fa-solid fa-info"></i> ABOUT
            </Link>
            <Link className="nav-item nav-link" to="/contact">
              <i className="fas fa-user-plus"></i> CONTACT
            </Link>
            <Link className="nav-item nav-link" to="/basket">
              <i className="fas fa-sign-in-alt"></i> BASKET
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
