import React, { useContext } from "react";
import { usersContext } from "../Context/usersContext";
import { Circular } from "styled-loaders-react";
import User from "./User";
import UserRight from "./UserRight";
import "../index.css";

function UserData() {
  const { userData, loading } = useContext(usersContext);

  console.log(loading);

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
export default UserData;
