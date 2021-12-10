import React from "react";
import "./style.scss";

/**
 * @packages
 */
import { Helmet } from "react-helmet";
import { Link } from "react-location";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function JobsFocused() {
  return (
    <div className="jobsFocused__container">
      <Helmet>
        <title>Software Engineer | Hash Technologies</title>
      </Helmet>

      {/** @section landing */}
      <div className="jobsFocused__container__landing">
        <Navbar />

        <ul>
          <li>
            <p className="light">Employement Type</p>
            <p className="bold">Full-Time</p>
          </li>
          <li>
            <p className="light">Years of Experience</p>
            <p className="bold">3+</p>
          </li>
          <li>
            <p className="light">Location</p>
            <p className="bold">Remote</p>
          </li>
          <li>
            <p className="light">Team Lead</p>
            <p className="bold">Laxman Rai</p>
          </li>
        </ul>

        <h1>Software Engineer</h1>
      </div>

      {/** @section summary */}
      <div className="jobsFocused__container__summary">
        <h1>What We’re Looking For</h1>
        <p>
          To grow our Smart Contracts team, we are looking for an experienced,
          self-driven Senior Software Engineer interested in working on the
          Graph Network. Designed entirely by the team, it combines several
          crypto-economic mechanisms such as curation with bonding curves,
          staking, delegation, slashing, and rewards distribution. The team is
          responsible for keeping the network contracts safe and pushing the
          tech further to advance the space.
        </p>
      </div>

      {/** @section responsibilities */}
      <div className="jobsFocused__container__responsibilities">
        <h1>Responsibilities</h1>

        <ul>
          <li>
            Design, code, test and deploy smart contracts of The Graph Network.
          </li>
          <li>Review code written by other team members.</li>
          <li>
            Collaborate with auditors to ensure code quality standards and
            security.
          </li>
          <li>
            Build back-end web services that interact with the Ethereum
            blockchain.
          </li>
          <li>
            Write scripts to automate monitoring and tracking to maintain the
            overall network health.
          </li>
        </ul>
      </div>

      {/** @section skills */}
      <div className="jobsFocused__container__skills">
        <h1>Desired skills</h1>

        <ul>
          <li>
            Experience in creating and maintaining low-level software systems
            and working on a constrained development environment.
          </li>
          <li>
            An interest in the intersection of law, economic systems and
            software.
          </li>
          <li>Attention to detail and a security-oriented mindset.</li>
          <li>
            Comfortable with a scripting language for task automation,
            preferably Typescript or Python.
          </li>
          <li>
            Have a collaborative, problem-solving attitude and be willing to
            help other team members.
          </li>
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
          <li>
            Experience in creating and maintaining low-level software systems
            and working on a constrained development environment.
          </li>
          <li>
            An interest in the intersection of law, economic systems and
            software.
          </li>
          <li>Attention to detail and a security-oriented mindset.</li>
          <li>
            Comfortable with a scripting language for task automation,
            preferably Typescript or Python.
          </li>
          <li>
            Have a collaborative, problem-solving attitude and be willing to
            help other team members.
          </li>
        </ul>
      </div>

      <div className="jobsFocused__container__btn">
      <Link>Apply Now</Link>
      </div>

      <div className="padding">
        <Footer />
      </div>
    </div>
  );
}
