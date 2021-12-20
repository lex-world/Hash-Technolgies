import React from "react";
import "./style.scss";

/**
 * @packages
 */
import { Helmet } from "react-helmet";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacyPolicy__container">
      <Helmet>
        <title>Privacy Policy | Hash Technologies</title>
      </Helmet>

      {/**
       * @section => navbar
       */}
      <Navbar />

      {/**
       * @section => header
       */}
      <div className="privacyPolicy__header">
        <h1>Privacy Policy</h1>
        <div className="lastUpdated">Last updated</div>
        <div className="date">July 05, 2021</div>

        <i>
          Hash Technologies (together, “Hash Technologies,” “we,” “us,” or
          “our”) is a software development company that creates and supports
          protocols and apps that are building the future. This Privacy Notice
          is designed to help you understand how we collect, use, and share your
          personal information, and to help you understand and exercise your
          privacy rights.
        </i>
      </div>

      {/**
       * @section => scope
       */}
      <div className="privacyPolicy__scope">
        <h1>Scope</h1>

        <p>
          For this version of our Progressive Web Application (PWA) we do not
          collect any of our site visitors information. And, we intend not to in
          future as well. We primarily focus on encrypting our own data, as well as
          in any case you need to post information to us, it won't be direct
          method so, we're refusing to collect information for this
          version.
        </p>
      </div>

      {/**
       * @section => contactUs
       */}
      <div className="privacyPolicy__contactUs">
        <h1>Contact Us</h1>

        <p>
          If you have any questions about our privacy practices or this Privacy
          Notice, or to exercise your rights as detailed in this Privacy Notice,
          please contact us at:
        </p>

        <ul>
          <li>Hash Technologies</li>
          <li>Jahada Road, Hash Tower, Traffic Chowk</li>
          <li>Biratnagar, Nepal +9779849092326</li>
          <li>Hash Technologies</li>
          <li>
            <b>legal@hashtechnologies.net</b>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
