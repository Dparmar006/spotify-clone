import React from "react";
import "./Header.css";

import ArrowBackRounded from "@material-ui/icons/ArrowBackIosRounded";
import PersonRounded from "@material-ui/icons/PersonRounded";
export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <button className="button">
          <ArrowBackRounded />
        </button>
        <button className="button">
          <PersonRounded />
        </button>
      </div>
    </header>
  );
};
