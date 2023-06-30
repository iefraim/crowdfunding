import React from "react";
import DonationPresets from "./DonationPresets";
import About from "./About";
import Teams from "./Teams";

const LeftColumn = (props) => (
  <div className="leftColumn col-md-8 col-xs-12 col-md-pull-4 ">
    <div className="topimage container-fluid">
      <About />
    </div>

    <DonationPresets />

    <Teams />
  </div>
);

export default LeftColumn;
