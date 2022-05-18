import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="px-5 bg-light d-flex justify-content-between align-items-center w-100 py-2">
      <div className="w-25">
        {" "}
        <h4 className="brand my-auto text-info">MY TODO LIST</h4>
      </div>
      <div className="w-75 d-flex items-center justify-content-end align-items-center">
        <Link to={"/home"} className="mx-3 nav-items text-secondary">
          HOME
        </Link>
        <Link to={"/todo"} className="mx-3 nav-items text-secondary">
          TO-DO
        </Link>
        {user ? (
          <>
            <button
              className="btn btn-outline-info text-secondary"
              onClick={handleSignOut}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link to={"/login"} className="mx-3 nav-items text-secondary">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
