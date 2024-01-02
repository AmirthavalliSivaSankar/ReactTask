import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../utils/constant";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`${BaseUrl}/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container  p-3 my-3 border col-sm-5">
      <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <ul className="list-group w-100">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          name:
          <span class="badge  badge-pill">{user.name}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          user name:
          <span class="badge  badge-pill">{user.username}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          email:
          <span class="badge  badge-pill">{user.email}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          password:
          <span class="badge  badge-pill"> {user.password}</span>
        </li>
      </ul>
    </div>
  );
};

export default User;
