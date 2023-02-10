import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreds((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(creds)).then((res) => {
      if (res) {
        navigate("/mens");
      } else {
        alert("Please try again")
      }
    });
  };
  return (
    <div>
      <h1>Login User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleOnChange}
          value={creds.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={creds.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
