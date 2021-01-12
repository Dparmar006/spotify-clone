import React from "react";
import { Link } from "react-router-dom";
import "./Row.css";
import RowCard from "./RowCard";

const Row = ({ rowTitle = "Row title" }) => {
  return (
    <div className="row">
      <h2 className="row__title">{rowTitle}</h2>
      <div className="row__container">
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
        <RowCard className="row__rowcard" />
      </div>
    </div>
  );
};

export default Row;
