import React from "react";
import "./style.scss";

/**
 * @packages
 */
import "remixicon/fonts/remixicon.css";
import { Helmet } from "react-helmet";
import { Link } from "react-location";

/**
 * @assets
 */
import BannerImage from "../../Assets/banner.png";
import SVisual1 from "../../Assets/small-visual1.png";
import SVisual2 from "../../Assets/small-visual2.png";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";
import TeamCard from "../../Components/TeamCard/TeamCard";
import Footer from "../../Components/Footer/Footer";

// @context
import { useDataLayerContextValue } from "../../Context/Context";

export default function Home() {
  const [{ works, teams }, dispatch] = useDataLayerContextValue();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    /** @dev only fetch data from api if work data on context is null */
    works.length === 0 &&
      fetch("https://hcms-hash.herokuapp.com/api/works?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => dispatch({ type: "SET_WORKS", payload: res.data }))
        .catch((err) => console.log(err));

    /** @dev only fetch data from api if team data on  context is null */
    teams.length === 0 &&
      fetch("https://hcms-hash.herokuapp.com/api/teams?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => dispatch({ type: "SET_TEAMS", payload: res.data }))
        .catch((err) => console.log(err));
  }, [teams.length, works.length, dispatch]);

  return (
    <div className="home__container">
      <Helmet>
        <title>Hash Technologies</title>
      </Helmet>

      {/**
       * @section => navbar
       */}
      <Navbar />

      {/**
       * @section => banner
       */}
      <div className="home__container__landingBanner">
        <div className="home__container__landingBanner__small">
          <img src={BannerImage} alt="banner" />
        </div>

        <div className="home__container__landing__content">
          <h1>Building the Ideas for Future & World.</h1>
          <p>
            We primarily prioritize the new project ideas for new generation for
            the better results. We strive to make daily life better, convenient
            and secure through our skills and knowledge.
          </p>
        </div>

        <div className="home__container__landingBanner__large">
          <img src={BannerImage} alt="banner" />
        </div>
      </div>

      {/**
       * @section => core values
       */}
      <div className="home__container__coreValues">
        <div>
          <img src={SVisual1} alt="visual" />
          <h1>Recognizing the past</h1>
          <p>
            Banks, Corporations, Universities, and Governments have been the
            predominent means of scaling human coordination. Capitalism has
            created a tremendous amount of wealth around the world but
            institutions have not been able to keep up with the rate of change
            brought on by the internet.
          </p>
        </div>

        <div>
          <img src={SVisual2} alt="visual" />
          <h1>Using technology for better life</h1>
          <p>
            Things like social media, informations and technology has their own
            pros and cons but being optimistic team. We focus more on pros than
            cons. There are endless possibilities to make lives better using
            them and we from Hash Technologies welcomes your new project ideas
            for good.
          </p>
        </div>
      </div>

      {/**
       * @section => our work
       */}
      <div className="home__container__ourWork">
        {works.length > 0 &&
          works.map((work, index) => (
            <div
              key={index}
              className={`home__container__ourWork__workItem ${
                index % 2 !== 0 && "second"
              }`}
            >
              {index % 2 === 0 && (
                <div>
                  <img
                    src={work?.attributes?.coverImage?.data[0]?.attributes?.url}
                    alt="Work Banner"
                  />
                </div>
              )}

              <div className="home__container__ourWork__workItem__content">
                <span>Our Work</span>
                <h1>{work?.attributes?.title}</h1>
                <p className="highlight">{work?.attributes?.description}</p>
                <p>{work?.attributes?.ExtraDescription}</p>
                <a
                  href={`https://${work?.attributes?.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {work?.attributes?.link}
                </a>
              </div>
              {index % 2 !== 0 && (
                <div>
                  <img
                    src={work?.attributes?.coverImage?.data[0]?.attributes?.url}
                    alt="Work Banner"
                  />
                </div>
              )}
            </div>
          ))}
      </div>

      {/**
       * @section => our team
       */}
      <div className="home__container__ourTeam">
        <h1>Our Team</h1>
        <p>
          We are a small, creative, high functioning team. We seek leverage by
          supporting and collaborating with a large number of similarly minded
          values aligned teams.
        </p>

        <div className="home__container__ourTeam__teams">
          {teams.length > 0 &&
            teams.map((team, index) => <TeamCard key={index} team={team} />)}
        </div>
      </div>

      {/**
       * @section => team expansion
       */}
      <div className="home__container__teamExpansion">
        <h1>We are expanding!</h1>
        <p>
          Join Hash Technologies to help build the decentralized future and
          scale human coordination on the internet.
        </p>
        <Link to="/jobs">View Jobs</Link>
      </div>
      <Footer />
    </div>
  );
}
