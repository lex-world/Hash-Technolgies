import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";

import DataLayerContextProvider from "./Context/Context";

ReactDOM.render(
  <DataLayerContextProvider>
    <App />
  </DataLayerContextProvider>,
  document.getElementById("root")
);
