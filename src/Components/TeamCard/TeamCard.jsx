import React from "react";
import "./style.scss";

export default function TeamCard() {
  return (
    <div className="TeamCard__container">
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="team"
      />
      <h2>Laxman Rai</h2>
      <h3>Co-Founder, VP Operations</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio
        voluptatum, asperiores nobis nam quam commodi sit totam ratione
        molestias inventore soluta eum excepturi corrupti vero labore
        consequatur velit est.
      </p>
      <ul className="social__links">
        <li>
          <i className="ri-instagram-line"></i>
        </li>
        <li>
          <i className="ri-github-fill"></i>
        </li>
        <li>
          <i className="ri-twitter-line"></i>
        </li>
        <li>
          <i className="ri-medium-line"></i>
        </li>
      </ul>
    </div>
  );
}
