import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const usersContext = createContext();

const UsersContextProvider = (props) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/rajsuthan")
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
    <usersContext.Provider value={{ userData, loading }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;
