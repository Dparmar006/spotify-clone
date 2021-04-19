import React from "react";
import { useDataLayerValue } from "../DataLayer";

import "./Row.css";
import RowCard from "./RowCard";
const shortenDescription = (str) => {
  return str.length < 20 ? str : str.substr(0, 60) + " ...";
};
const Row = ({ rowTitle = "Your playlists", array = null }) => {
  return (
    <div className="row">
      <h2 className="row__title">{rowTitle}</h2>
      <div className="row__container">
        {array?.items?.map((array) => (
          <RowCard
            rowCardTitle={array?.name}
            rowCardImgUrl={array?.images[0]?.url}
            rowCardDescription={shortenDescription(array?.description || "")}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
