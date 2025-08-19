import React from "react";
import About from "./About";
import Donate from "./Donate";

const LeftColumn: React.FC = () => {
  //TODO
  return (
    <>
      <div className="leftColumn col-md-8 col-xs-12 col-md-pull-4 ">
        <About />
        <div className="hideMobile">
          <Donate />
        </div>
        teams
      </div>
    </>
  );
};

export default LeftColumn;
