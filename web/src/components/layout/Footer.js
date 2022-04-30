import React from 'react'
import cblogo from "../../images/cblogo.png";
import { Link } from "gatsby";
import phoneIcon from '../../images/phoneIcon.png'
import facebookIcon from '../../images/icons8-facebook-48.png'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <Link className="logo-container" to="/">
          <img className="footer-logo" src={cblogo} alt="logo link" />
        </Link>
      </div>
      <div className="footer-schedule-wrapper">
        <h3>The Checkerboard Tavern Hours</h3>
        <p>Monday - Thursday: 11am to 3am </p>
        <p>Friday: 11am to 3am</p>
        <p>Saturday: 11am to 3am</p>
        <p>Sunday:11am to 3am</p>
      </div>
      <div className="footer-information-wrapper">
        <h3>Contact Info</h3>
        <address>1521 Kossuth St. Lafayette, IN 47905</address>
        <a href="tel:+17658388301">
          <img className="footer-icon" src={phoneIcon} alt="mobile icon" /> 765-838-8301
        </a>
        <br/>
        <a className="facebook-link" href="https://www.facebook.com/CheckerboardTavern/">
          <img className="social-media-icon facebook-icon" src={facebookIcon} alt="facebook icon link"/>
        </a>
      </div>
    </div>
  );
}

export default Footer