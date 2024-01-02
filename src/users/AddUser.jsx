import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BaseUrl } from "../utils/constant";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  let navigate = useNavigate();

  const { name, username, email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BaseUrl}`, user);
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <Link className="btn btn-primary" to="/home">
          back to Home
        </Link>
        <h4 className="text-center mb-4">Add A User</h4>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
