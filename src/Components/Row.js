import React from "react";

import "./Row.css";
import RowCard from "./RowCard";

const Row = ({ rowTitle = "Your playlits" }) => {
  return (
    <div className="row">
      <h2 className="row__title">{rowTitle}</h2>
      <div className="row__container">
        <a href="/playlist" className="row__link">
          <RowCard className="row__rowcard" />
        </a>
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
      </div>
    </div>
  );
};

export default Row;
