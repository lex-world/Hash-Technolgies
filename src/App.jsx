import React from "react";

/**
 * @packages
 */
import {
  ReactLocation,
  Router,
} from "react-location";

/**
 * @components
 */
import Footer from "./Components/Footer/Footer";

/**
 * @pages
 */
import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

const location = new ReactLocation();

export default function App() {
  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          },
        ]}
      />
      <Footer/>
    </>
  );
}
