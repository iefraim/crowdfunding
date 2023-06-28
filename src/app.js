//modules
import React from "react";
import ReactDOM from "react-dom/client"
//stylesheets
import "normalize.css/normalize.css"
import "bootstrap/scss/bootstrap.scss"
import "./styles/styles.scss"
//components
import CrowdfundFinal from "./components/CrowdfundFinal"
import { StrictMode } from "react";

const appRoot=ReactDOM.createRoot(document.getElementById("app"))

appRoot.render(<StrictMode><CrowdfundFinal/></StrictMode>)