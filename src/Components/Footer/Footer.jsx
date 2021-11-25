import React from "react";
import "./style.scss";
import { Link } from "react-location";

export default function Footer() {
  return (
    <div className="footer__container">
      <ul>
        <li style={{ color: "#17203e", fontWeight: "600" }}>
          Hash Technologies
        </li>
        <li>Jobs</li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms of Service</Link>
        </li>
      </ul>
      <div style={{ fontWeight: "500", color: "#7a7a7a" }}>
        Copyright 2021, Hash Technologies
      </div>
    </div>
  );
}
