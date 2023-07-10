//modules
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
//stylesheets
import "normalize.css/normalize.css";
import "bootstrap/scss/bootstrap.scss";
import "./styles/styles.scss";
//components
import Crowdfund from "./components/Crowdfund";

const appRoot = ReactDOM.createRoot(document.getElementById("app"));

appRoot.render(
  <StrictMode>
    <Crowdfund />
  </StrictMode>
);
