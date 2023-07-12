import React from "react";

import About from "./About";
import Donate from "./Donate";
import Teams from "./Teams";

const LeftColumn = () => {
  //TODO: styling
  return (
    <div className="leftColumn col-md-8 col-xs-12 col-md-pull-4 ">
      <div className="div--box donors">
        <About />
        <Donate />
      </div>
      <Teams />
    </div>
  );
};

export default LeftColumn;
