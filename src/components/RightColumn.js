import React from "react";

import Countdown from "./Countdown";
import Total from "./Total";
import Donations from "./Donations";
import TeamTotal from "./TeamTotal";

const RightColumn = () => {
  return (
    <div className="rightColumn col-md-4 col-sm-12 col-md-push-8">
      <div className="col-xs-12 div--box donors">
        <Countdown />
        <Total />
      </div>
      <div className="col-xs-12 div--box donors">
        <TeamTotal />
        <Donations />
      </div>
    </div>
  );
};

export default RightColumn;
