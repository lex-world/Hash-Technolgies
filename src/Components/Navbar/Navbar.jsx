import React from "react";
import { Link } from "react-location";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <Link to="/" className="navbar__container__title">
        Hash Technologies
      </Link>
      {/* <div className="home__container__links"></div> */}
    </div>
  );
}
