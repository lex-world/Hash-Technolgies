import React from "react";
import "./style.scss";

/**
 * @packages
 */
import { Helmet } from "react-helmet";
// import { Link } from "react-location";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// import JobList from "../../Helpers/Jobs.json";
// import JobsCard from "../../Components/JobsCard/JobsCard";

export default function Jobs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobs__container">
      <Helmet>
        <title>Jobs | Hash Technologies</title>
      </Helmet>

      {/**
       * @section => navbar
       */}
      <div className="additional-padding">
        <Navbar />
      </div>

      <h1 className="jobs__container__title">Working at Hash Technologies</h1>

      <ul className="jobs__container__introContent">
        <li>
          <h3>Ideas Always Win</h3>
          <p>
            The best ideas can come from anywhere. We have a collaborative
            culture where we discuss things openly and everyone has a voice.
            Areas of ownership ensure that each person understands how to
            participate and how decisions are made.
          </p>
        </li>
        <li>
          <h3>We Value Wellbeing</h3>
          <p>
            We're doing important work but not at the expense of our health and
            wellbeing. At Edge & Node you can work from anywhere and still have
            time for family and friends. By valuing our people we hope to keep
            the team together and productive for years to come.
          </p>
        </li>
        <li>
          <h3>Learn at Lightspeed</h3>
          <p>
            Great people optimize for learning and growth above all else. We’re
            working at the cutting edge of decentralization and no matter where
            you’re starting from, you will be learning everyday as we help push
            the industry forward.
          </p>
        </li>
      </ul>

      <div className="jobs__container__jobs">
        <h2 className="jobs__container__jobs__title">Open Positions</h2>
        <p>
          See if you fit one of these roles to join our group of talented,
          motivated, and kind humans.
        </p>

        <h1 style={{textAlign: 'center'}}>
          Currently, there are none open positions, keep updated with us to join
          for future open positions 😇.
        </h1>
        {/* <div className="jobs__container__jobs__list">
          {JobList.map((job, index) => (
            <Link key={index} to="/job/?id=1234"><JobsCard category={job.category} title={job.title} /></Link>
          ))}
        </div> */}
      </div>

      <div className="additional-padding">
        <Footer />
      </div>
    </div>
  );
}
