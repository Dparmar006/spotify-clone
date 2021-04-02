import React from "react";
import "./CardGrid.css";
const CardGrid = () => {
  return (
    <section className="stripcard-container">
      <h2 className="stripcard__title">Good morning</h2>
      <div className="stripcardgrid">
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
        <div className="stripcard">
          <img
            src="./assets/images/tomato-face.png"
            alt="stripcard-image"
            className="stripcard__img"
          />
          <div className="stripcard__name">"Stripcard name"</div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
