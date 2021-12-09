import React from "react";
import "./style.scss";

export default function JobsCard({ category, title }) {
    console.log(category);
  return (
    <div className="jobsCard__container">
      <div className="jobsCard__container__category">{category}</div>
      <div className="jobsCard__container__title">{title}</div>
    </div>
  );
}
