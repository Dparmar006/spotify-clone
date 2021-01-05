import React from "react";
import "./RowCard.css";
const RowCard = ({
  rowCardTitle = "Similarities 100",
  rowCardDescription = "By Dixit",
}) => {
  return (
    <div className="rowcard">
      <div className="rowcard__container">
        <img className="rowcard__image" src="" alt="" />
        <div className="rowcard__info">
          <div className="rowcard__title">{rowCardTitle}</div>
          <div className="rowcard__description">{rowCardDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
