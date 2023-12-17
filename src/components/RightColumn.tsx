import React from "react";


import Countdown from "./Countdown";

import Total from "./Total";
import Donations from "./Donations";
import TeamTotal from "./TeamTotal";
import Donate from "./Donate";

const RightColumn: React.FC = () => {

  return (
    <div className="rightColumn col-md-4 col-sm-12 ">
      <div className="col-xs-12 div--box donors">
        <Countdown />

        <Total />
      </div>
        <div className="showMobile">    <Donate /></div>
      <div className="col-xs-12 div--box donors">
        <TeamTotal />
        <Donations />
      </div>
    </div>
  );
};

export default RightColumn;
