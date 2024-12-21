import React from "react";
import { Link } from "react-router-dom";

import facebook from "../img/facebook-f-brands31.svg";
import instagram from "../img/instagram-brands1.svg";
import pinterest from "../img/pinterest-p-brands1.svg";
import twitter from "../img/twitter-brands1.svg";

const Footer = () => {
  return (
    <footer className="footer center">
      <div className="footer__left">© 2022 Brand All Rights Reserved.</div>
      <div className="footer__right">
        <div className="footer__icon">
          <Link className="footer__link" to="#">
            <img src={facebook} alt="facebook link" />
          </Link>
        </div>
        <div className="footer__icon">
          <Link className="footer__link" to="#">
            <img src={instagram} alt="instagram link" />
          </Link>
        </div>
        <div className="footer__icon">
          <Link className="footer__link" to="#">
            <img src={pinterest} alt="p link" />
          </Link>
        </div>
        <div className="footer__icon">
          <Link className="footer__link" to="#">
            <img src={twitter} alt="x link" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
