import React from "react";
import "./Sidebar.css";
import "./Header.css";
import ArrowBackRounded from "@material-ui/icons/ArrowBackIosRounded";
import PersonRounded from "@material-ui/icons/PersonRounded";

import { ExitToApp, MenuRounded } from "@material-ui/icons";

const Header = () => {
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
              if (sidebar.className == "sidebar") {
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
            src="./assets/images/Spotify_Logo_RGB_Green.png"
            className="header__logo"
          />
        </div>

        <button className="button">
          <PersonRounded />
        </button>
      </div>
    </header>
  );
};

export default Header;
