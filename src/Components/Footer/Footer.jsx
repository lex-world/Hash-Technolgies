import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer__container">
      <ul>
        <li style={{ color: "#17203e", fontWeight: "600" }}>Hash Technologies</li>
        <li>Jobs</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
      <div style={{ fontWeight: "500", color: "#7a7a7a" }}>Copyright 2021, Hash Technologies</div>
    </div>
  );
}
