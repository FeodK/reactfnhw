import React from "react";
import { Link } from "react-router-dom";

import saleIcon from "../img/Group36.png";
import saleIcon2 from "../img/Group37.jpg";
import saleIcon3 from "../img/Group38.jpg";
import saleIcon4 from "../img/Group39.jpg";

const Sale = () => {
  return (
    <section className="sale center">
      <div className="sale__block">
        <div className="sale__block-top">
          <ul className="sale__block-list">
            <li className="sale__block-item sale__block-item1">
              <Link to="#" className="sale__block-item-content">
                <img className="sale__block-img" src={saleIcon} alt="" />
                <div className="sale__block-info">
                  <p className="sale__block-offer">30% OFF</p>
                  <h3 className="sale__block-category">FOR WOMEN</h3>
                </div>
              </Link>
            </li>
            <li className="sale__block-item sale__block-item2">
              <Link to="#" className="sale__block-item-content">
                <img className="sale__block-img" src={saleIcon2} alt="" />
                <div className="sale__block-info">
                  <p className="sale__block-offer">HOT DEAL</p>
                  <h3 className="sale__block-category">FOR MEN</h3>
                </div>
              </Link>
            </li>
            <li className="sale__block-item sale__block-item3">
              <Link to="#" className="sale__block-item-content">
                <img className="sale__block-img" src={saleIcon3} alt="" />
                <div className="sale__block-info">
                  <p className="sale__block-offer">NEW ARRIVALS</p>
                  <h3 className="sale__block-category">FOR KIDS</h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sale__block-down">
          <div className="sale__block-down-item">
            <Link to="#" className="sale__block-item-content">
              <img className="sale__block-down-img" src={saleIcon4} alt="" />
              <div className="sale__block-info sale__block-info-down">
                <p className="sale__block-offer">LUXIROUS & TRENDY</p>
                <h3 className="sale__block-category">ACCESORIES</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
