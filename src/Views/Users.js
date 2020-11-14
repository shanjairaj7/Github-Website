import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import User from "../Components/User";
import { Circular } from "styled-loaders-react";
import "../index.css";
import { Link } from "react-router-dom";
import NotFound from "../Components/NotFound";

function Users() {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${input}`)

      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [submitted]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
    console.log(input);
  };

  console.log(userData);
  return (
    <div className="users">
      <h1>Users</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Search for a user"
          className="form-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {loading ? (
        <Circular />
      ) : userData.total_count == 0 ? (
        <NotFound />
      ) : (
        <div className="multiple-users">
          {userData.items
            ? userData.items.map((item) => (
                <Link
                  to={`user/${item.login}`}
                  key={item.login}
                  style={{ textDecoration: "none" }}
                >
                  <User userData={item} />
                </Link>
              ))
            : ""}
        </div>
      )}
    </div>
  );
}

export default Users;
