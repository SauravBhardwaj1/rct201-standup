import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <h1>Homepage</h1>
      <div
        style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}
      >
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/mens"}>
          <button>Mens</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
