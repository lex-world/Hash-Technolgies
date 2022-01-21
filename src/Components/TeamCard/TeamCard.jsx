import React from "react";
import "./style.scss";

export default function TeamCard({team}) {
  console.log(team.attributes)
  const {Name, position, quote, profileImage} = team.attributes;

  return (
    <div className="TeamCard__container">
      <img
        src={profileImage?.data[0]?.attributes?.formats?.thumbnail?.url}
        alt={Name}
      />
      <h2>{Name}</h2>
      <h3>{position}</h3>
      <p>
        {quote}
      </p>
    </div>
  );
}
