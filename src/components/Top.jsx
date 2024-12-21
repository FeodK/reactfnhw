import React from "react";
import man from "../img/Layer_57-removebg-preview1.png";

const Top = () => {
  return (
    <section className="top">
      <div className="top__content">
        <div className="top__left top__left_mobile">
          <img
            className="top__left-img"
            src={man}
            alt="man in fashion clothes"
          />
        </div>
        <div className="top__right">
          <div className="top__right-content">
            <h1 className="top__right-title">THE BRAND</h1>
            <h2 className="top__right-title-second-line">
              OF LUXERIOUS <span id="fashion">FASHION</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
