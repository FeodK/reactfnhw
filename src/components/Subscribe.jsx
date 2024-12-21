import React from "react";
import img from "../img/Intersect.svg";

const Subscribe = () => {
  return (
    <section className="subscribe center">
      <div className="subscribe__block">
        <div className="subscribe__left">
          <div className="subscribe__left-img">
            <img src={img} alt="img" />
          </div>
          <div className="subscribe__left-text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum“
          </div>
        </div>
        <div className="subscribe__right">
          <h3 className="subscribe__right-title">SUBSCRIBE</h3>
          <h4 className="subscribe__subtitle">FOR OUR NEWLETTER AND PROMOTION</h4>
          <div className="subscribe__rigth-form">
            <form action="#">
              <input
                className="subscribe__input"
                type="email"
                placeholder="Enter Your Email"
              />
              <button onSubmit={(e) => {e.preventDefault()}} className="subscribe__btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
