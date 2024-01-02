import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BaseUrl } from "../utils/constant";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${BaseUrl}`);
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    console.log("deleteUser", id);
    await axios.delete(`${BaseUrl}/${id}`);
    loadUsers();
  };

  return (
    <div className="container table-responsive">
      <div className="py-4">
        <h3>Home Page</h3>
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/${user._id}`}
                  >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-outline-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
