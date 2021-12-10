import React from "react";
import "./style.scss";

export default function TeamCard({team}) {
  const {image, name, position} = team;
  // const {image, name, position, quote, socialLinks} = team;

  return (
    <div className="TeamCard__container">
      <img
        src={image}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio
        voluptatum, asperiores nobis nam quam commodi sit totam ratione
        molestias inventore soluta eum excepturi corrupti vero labore
        consequatur velit est.
      </p>
      {/* <ul className="social__links">
        <li>
          <a target="_blank"><i className="ri-instagram-line"></i></a>
        </li>
        <li>
          <a target="_blank"><i className="ri-github-fill"></i></a>
        </li>
        <li>
          <a target="_blank"><i className="ri-twitter-line"></i></a>
        </li>
        <li>
        <a target="_blank"><i className="ri-facebook-box-line"></i></a>
        </li>
      </ul> */}
    </div>
  );
}
