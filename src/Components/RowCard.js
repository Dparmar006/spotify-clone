import React from "react";

import "./RowCard.css";
const RowCard = ({
  rowCardTitle = "Similarities 100",
  rowCardDescription = "By Dixit",
}) => {
  return (
    <a href="/somewhere" className="row__link">
      <div className="rowcard">
        <div className="rowcard__container">
          <img
            className="rowcard__image"
            src="./assets/images/tomato-face.png"
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
