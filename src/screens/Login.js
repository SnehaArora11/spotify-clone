import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__logo"
          src="./assets/images/Spotify_Icon_RGB_White.png"
          alt="main-logo-"
        />
        <a className="login-button" href={loginUrl}>
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
