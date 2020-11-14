import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFileAlt,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { Link } from "react-router-dom";

function User({ userData }) {
  return (
    <div className="user">
      <div className="user-data">
        <div className="user-img">
          <img src={userData.avatar_url} />
        </div>
        <h1>{userData.login}</h1>
      </div>
      <div className="main-info">
        <div>
          <FontAwesomeIcon className="font-awesome" icon={faUsers} />
          <span>
            Followers : <span>{userData.followers}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon className="font-awesome" icon={faFileAlt} />
          <span>
            Public Repos : <span>{userData.public_repos}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon className="font-awesome" icon={faArchive} />
          <span>
            Public Gists : <span>{userData.public_gists}</span>
          </span>
        </div>
      </div>
      <a
        as={Link}
        className="user-button"
        href={userData.html_url}
        target="_blank"
      >
        Go to profile
      </a>
    </div>
  );
}

export default User;
