import React from "react";

import "./RowCard.css";
const RowCard = ({
  rowCardTitle = "Similarities 100",
  rowCardDescription = "",
  rowCardImgUrl = "./assets/images/tomato-face.png",
}) => {
  return (
    <a href="/playlist" className="row__link">
      <div className="rowcard">
        <div className="rowcard__container">
          <img
            className="rowcard__image"
            src={rowCardImgUrl}
            alt="playlisCover"
          />
          <div className="rowcard__info">
            <div className="rowcard__title">{rowCardTitle}</div>
            <div className="rowcard__description">{rowCardDescription}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RowCard;
