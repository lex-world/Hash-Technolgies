import React from "react";

/**
 * @packages
 */
import {
  ReactLocation,
  Router,
} from "react-location";

/**
 * @pages
 */
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";

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
          {
            path: "/terms",
            element: <TermsOfService />,
          },
          {
            path: "/jobs",
            element: <Jobs />,
          },
        ]}
      />
    </>
  );
}
