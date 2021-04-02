import React from "react";
import { useDataLayerValue } from "../DataLayer";

import "./Row.css";
import RowCard from "./RowCard";
const shortenDescription = (str) => {
  return str.length < 20 ? str : str.substr(0, 60) + " ...";
};
const Row = ({ rowTitle = "Your playlists" }) => {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="row">
      <h2 className="row__title">{rowTitle}</h2>
      <div className="row__container">
        {playlists?.items?.map((playlist) => (
          <RowCard
            rowCardTitle={playlist.name}
            rowCardImgUrl={playlist?.images[0]?.url}
            rowCardDescription={shortenDescription(playlist?.description)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
