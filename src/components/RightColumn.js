import React from "react";

import Countdown from "./Countdown";
import Total from "./Total";
import Donations from "./Donations";
import TeamTotal from "./components/TeamTotal";

const RightColumn = () => {
  //TODO: styling
  return (
    <div className="rightColumn col-md-4 col-sm-12 col-md-push-8">
      <div className="col-xs-12 donatebox donors">
        <Countdown />
        <Total />
      </div>
      <div className="col-xs-12 donatebox donors">
        <TeamTotal />
        <Donations />
      </div>
    </div>
  );
};

export default RightColumn;
