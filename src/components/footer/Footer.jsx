import React from "react";

export default function Footer() {
  return (
    <footer>
      <section className="contact-info">
        <div className="contact-info-logo">
          <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/logo.svg" alt="" />
        </div>
        <div className="contact-info-location">
          <div className="contact-info-location-item">
            <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div className="contact-info-contacts">
          <div className="contact-info-contacts-item">
            <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg" alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="contact-info-contacts-item">
            <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg" alt="" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <nav className="contact-info-links">
          <ul className="contact-info-links-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul className="contact-info-links-list">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </nav>
        <div className="contact-info-social-links">
          <a className="icon-link" href="#">
            <div className="contact-info-social-link-item flex-center">
              <i className="fab fa-facebook-f"></i>
            </div>
          </a>
          <a className="icon-link" href="#">
            <div className="contact-info-social-link-item flex-center">
              <i className="fab fa-twitter"></i>
            </div>
          </a>
          <a className="icon-link" href="#">
            <div className="contact-info-social-link-item flex-center">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
        </div>
        <div className="attribution-container">
          <p className="attribution">
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
              Frontend Mentor
            </a>
            . Coded by <a href="https://codepen.io/devhannah">Hannah</a>.
          </p>
        </div>
      </section>
    </footer>
  );
}
