import React from "react";

import About from "./About";
import Donate from "./Donate";
import Teams from "./Teams";

const LeftColumn: React.FC = () => {
  return (
    <div className="leftColumn col-md-8 col-xs-12 col-md-pull-4 ">
      <About />
        <div className="hideMobile">
      <Donate />
        </div>
      <Teams />
    </div>
  );
};

export default LeftColumn;
