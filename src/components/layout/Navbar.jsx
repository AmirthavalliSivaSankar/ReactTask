import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userEmail, setUserEmail] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
  });

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("Password");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-between">
        <Link className="navbar-brand" href="/">
          React Task
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          ☰
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbar-collapse"
        >
          <ul class="nav navbar-nav ">
            <li class="nav-item active">
              {userEmail !== null && (
                <Link className="btn btn-dark mr-5" to="/users/add">
                  Add User
                </Link>
              )}
            </li>
            <li class="nav-item">
              {userEmail !== null && (
                <button onClick={handleSignOut} className="btn btn-light">
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
