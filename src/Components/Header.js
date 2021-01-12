import React from "react";
import "./Header.css";

import ArrowBackRounded from "@material-ui/icons/ArrowBackIosRounded";
import PersonRounded from "@material-ui/icons/PersonRounded";
export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <button className="button">
            <ArrowBackRounded />
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
