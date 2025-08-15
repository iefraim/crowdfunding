//modules
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// //stylesheets
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
//components
import Crowdfund from "./components/Crowdfund";

const appRoot = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);

appRoot.render(
  <StrictMode>
    <Crowdfund />
  </StrictMode>
);
