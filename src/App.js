import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import UsersContextProvider from "./Context/usersContext";
import UserData from "./Components/UserData";
import Input from "./Components/Input";
import Users from "./Views/Users";
import SearchedUser from "./Views/SearchedUser";

function App() {
  return (
    <Router>
      <UsersContextProvider>
        <div className="container">
          <div className="navbar">
            <Header />
            <Navigation />
          </div>

          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/repos">
              <h1>Repos</h1>
            </Route>
            <Route path="/" exact>
              <UserData />
            </Route>
            <Route path="/user/:username">
              <SearchedUser />
            </Route>
          </Switch>
        </div>
      </UsersContextProvider>
    </Router>
  );
}

export default App;
