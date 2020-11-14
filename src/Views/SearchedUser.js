import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserRight from "../Components/UserRight";
import User from "../Components/User";
import { Circular } from "styled-loaders-react";

function SearchedUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setLoading(true);
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Circular />
        </div>
      ) : (
        <div className="user-info">
          <User userData={userData} />
          <UserRight userData={userData} />
        </div>
      )}
    </div>
  );
}

export default SearchedUser;
