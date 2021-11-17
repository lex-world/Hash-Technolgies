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

export default function Home() {
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
        <div>
          <h1>Building the Decentralized Future & World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse
            nesciunt incidunt deserunt quos atque veniam? Suscipit error sint
            fugiat, quisquam earum voluptate veritatis itaque.
          </p>
        </div>
        <img src={BannerImage} alt="banner" />
      </div>

      {/**
       * @section => core values
       */}
      <div className="home__container__coreValues">
        <div>
          <img src={SVisual1} alt="visual" />
          <h1>Recognizing the past</h1>
          <p>
            Modern society has evolved over the past two hundred years around
            Industrial Age institutions. Banks, Corporations, Universities, and
            Governments have been the predominent means of scaling human
            coordination. Capitalism has created a tremendous amount of wealth
            around the world but institutions have not been able to keep up with
            the rate of change brought on by the internet.
          </p>
        </div>
        <div>
          <img src={SVisual2} alt="visual" />
          <h1>Decentralized Systems</h1>
          <p>
            Protocols are internet native instutions that are open and
            transparent, and can be used to coordinate large numbers of people.
            Using crypto, we can rethink what it means to be an effective
            individual in the Internet Age. How we spend our time, what we
            value, the way we distribute resources, the big audacious goals we
            take on—it’s all up for grabs. This is our time to dream big, work
            hard, and create the future we want to live in.
          </p>
        </div>
      </div>

      {/**
       * @section => our work
       */}
      <div className="home__container__ourWork">
        <div className="home__container__ourWork__workItem">
          <img src="https://edgeandnode.com/images/thegraph2.jpg" alt="" />
          <div className="home__container__ourWork__workItem__content">
            <span>Our Work</span>
            <h1>Hami Nepal</h1>
            <p className="highlight">
              An indexing protocol for organizing blockchain data and making it
              easily accessible.
            </p>
            <p>
              What Google does for the web, The Graph does for blockchains. A
              decentralized network ensures that open data is always available
              and easy to access. The Graph is used by thousands of protocols
              and dApps like Uniswap, Synthetix, Aave, Balancer, Zora,
              Foundation, and more.
            </p>
            <Link>haminepal.org</Link>
          </div>
        </div>
        <div className="home__container__ourWork__workItem second">
          <div className="home__container__ourWork__workItem__content">
            <span>Our Work</span>
            <h1>Swasthay Samriddhi Card</h1>
            <p>
              An indexing protocol for organizing blockchain data and making it
              easily accessible.
            </p>
            <p>
              What Google does for the web, The Graph does for blockchains. A
              decentralized network ensures that open data is always available
              and easy to access. The Graph is used by thousands of protocols
              and dApps like Uniswap, Synthetix, Aave, Balancer, Zora,
              Foundation, and more.
            </p>
            <Link>swasthysamriddhicard.com</Link>
          </div>
          <img src="https://edgeandnode.com/images/everest2.jpg" alt="" />
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
      </div>
    </div>
  );
}
