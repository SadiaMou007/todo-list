import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="px-5 bg-light d-flex justify-content-between align-items-center w-100 py-2">
      <div className="w-25">
        {" "}
        <h4 className="brand my-auto">MY TODO LIST</h4>
      </div>
      <div className="w-75 d-flex items-center justify-content-end align-items-center">
        <Link to={"/home"} className="mx-3 nav-items">
          HOME
        </Link>
        <Link to={"/login"} className="mx-3 nav-items">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
