import React from "react";
import advatageIcon from "../img/F1.svg";
import advatageIcon2 from "../img/F2.svg";
import advatageIcon3 from "../img/F3.svg";

const Advantages = () => {
  return (
    <section className="advateges center">
      <div className="advateges__block">
        <div className="advateges__item">
          <div className="advateges__images">
            <img src={advatageIcon} alt="img" />
          </div>
          <h3 className="advateges__title">Free Delivery</h3>
          <div className="advateges__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </div>
        </div>
        <div className="advateges__item">
          <div className="advateges__images">
            <img src={advatageIcon2} alt="img" />
          </div>
          <h3 className="advateges__title">Sales & discounts</h3>
          <div className="advateges__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </div>
        </div>
        <div className="advateges__item">
          <div className="advateges__images">
            <img src={advatageIcon3} alt="img" />
          </div>
          <h3 className="advateges__title">Quality assurance</h3>
          <div className="advateges__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
