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

import JobList from '../../Helpers/Jobs.json';

export default function JobsFocused(props) {
  const [jobItem, setJobItem] = React.useState();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setJobItem(JobList[parseInt(localStorage.getItem("job"))])
  }, []);
  
  return (
    <div className="jobsFocused__container">
      <Helmet>
        <title>Apply for Job | Hash Technologies</title>
      </Helmet>

      {/** @section landing */}
      <div className="jobsFocused__container__landing">
        <Navbar />

        <ul>
          <li>
            <p className="light">Employement Type</p>
            <p className="bold">{jobItem?.details?.employment_type}</p>
          </li>
          <li>
            <p className="light">Years of Experience</p>
            <p className="bold">{jobItem?.details?.experience}</p>
          </li>
          <li>
            <p className="light">Location</p>
            <p className="bold">{jobItem?.details?.location}</p>
          </li>
          <li>
            <p className="light">Team Lead</p>
            <p className="bold">{jobItem?.details?.team_lead}</p>
          </li>
        </ul>

        <h1>{jobItem?.title}</h1>
      </div>

      {/** @section summary */}
      <div className="jobsFocused__container__summary">
        <h1>What We’re Looking For</h1>
        <p>
          {jobItem?.details?.what_we_are_looking_for}
        </p>
      </div>

      {/** @section responsibilities */}
      <div className="jobsFocused__container__responsibilities">
        <h1>Responsibilities</h1>

        <ul>
          {jobItem?.details?.responsibilites?.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/** @section skills */}
      <div className="jobsFocused__container__skills">
        <h1>Desired skills</h1>

        <ul>
        {jobItem?.details?.desired_skills?.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/** @section recommended */}
      <div className="jobsFocused__container__recommended">
        <h1>Strongly Recommended</h1>

        <p>
          We are looking for a Senior Software Engineer that is interested in
          building and getting deep into building blockchain applications.
        </p>
        <ul>
        {jobItem?.details?.recommended?.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="jobsFocused__container__btn">
        <a href={`https://mail.google.com/mail/?view=cm&to=${
            process.env.REACT_APP_HR
          }&su=${`Application for ${jobItem?.title}`}&body=Attach your CV here.`} target="_blank" rel="noreferrer">
          Apply Now
        </a>
      </div>

      <div className="padding">
        <Footer />
      </div>
    </div>
  );
}
