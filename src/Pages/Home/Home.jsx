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

/**
 * @helpers
 */
import Teams from "../../Helpers/OurTeam.json";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="home__container__ourWork__workItem">
          <div>
            <img
              src="https://hashtechnologies-ui.s3.ap-south-1.amazonaws.com/haminepal.jpg"
              alt="Hami Nepal"
            />
          </div>
          <div className="home__container__ourWork__workItem__content">
            <span>Our Work</span>
            <h1>Hami Nepal</h1>
            <p className="highlight">
              Hami Nepal runs on a no-fee basis, with all volunteers donating
              their time and effort, which motivates Hami Nepal's team to work
              and achieve more for the people.
            </p>
            <p>
              Hami Nepal is a non-profit organisation, established in 2015 A.D.
              and registered in 2020 A.D. (Regd.no. 609789065), which directly
              connects the donors and the recipients. Our main objective is to
              help anyone in need without any hesitations and expectation of
              payback.
            </p>
            <a href="https://haminepal.org" target="_blank" rel="noreferrer">
              haminepal.org
            </a>
          </div>
        </div>
        <div className="home__container__ourWork__workItem second">
          <div className="home__container__ourWork__workItem__content">
            <span>Our Work</span>
            <h1>Thrift My Outfit</h1>
            <p className="highlight">
              Thrift My Outfit mainly focuses on normalizing thrifted outfits
              like we use thrifted gadgets, digital goods etc.
            </p>
            <p>
              Thrift My Outfit is a organization which helps outfit thrifts to
              collab with other vendors and circle out same items since
              marketing is not cheap, TMO helps every level of thrift owners to
              sell their items.
            </p>
            <a href="https://thriftmyoutfit.com" target="_blank" rel="noreferrer">thriftmyoutfit.com</a>
          </div>
          <div>
            <img
              src="https://hashtechnologies-ui.s3.ap-south-1.amazonaws.com/thriftmyoutfit.jpg"
              alt="thriftmyoutfit"
            />
          </div>
        </div>
        <div className="home__container__ourWork__workItem">
          <div>
            <img
              src="https://hashtechnologies-ui.s3.ap-south-1.amazonaws.com/tbs.jpg"
              alt="The Boring School"
            />
          </div>
          <div className="home__container__ourWork__workItem__content">
            <span>Our Work</span>
            <h1>The Boring School</h1>
            <p className="highlight">
              The Boring School in short TBS is a platform for IT students to
              hone their technological skills by solving real world puzzles.
            </p>
            <p>
              The Boring School not just only aims to provide courses to develop the skills but also serves podcast, discussions and blog which is yet not completed but under development.
            </p>
            <a href="https://theboringschool.org" target="_blank" rel="noreferrer">
              theboringschool.org
            </a>
          </div>
        </div>
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
          {Teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>

      {/**
       * @section => team expansion
       */}
      <div className="home__container__teamExpansion">
        <h1>We are expanding!</h1>
        <p>
          Join Hash Technologies to help build the decentralized future and scale
          human coordination on the internet.
        </p>
        <Link to="/jobs">View Jobs</Link>
      </div>
      <Footer />
    </div>
  );
}
