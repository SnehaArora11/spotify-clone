import React from "react";
import "./Sidebar.css";
import "./Header.css";

import { MenuRounded } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          {/* <input type="checkbox" id="menu" />
          <label htmlFor="menu" for="menu">
            <MenuRounded />
          </label> */}

          <button
            id="menu-btn"
            className="button"
            onClick={() => {
              const sidebar = document.getElementById("sidebar");
              if (sidebar.className === "sidebar") {
                sidebar.classList.add("sidebar-closed");
              } else {
                sidebar.classList.remove("sidebar-closed");
                sidebar.classList.add("sidebar");
              }
            }}
          >
            <MenuRounded />
          </button>

          <img
            src="./assets/images/Spotify_Logo_RGB_White.png"
            className="header__logo"
            alt="spotify"
          />
        </div>
        <div className="header__userinfo">
          <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
