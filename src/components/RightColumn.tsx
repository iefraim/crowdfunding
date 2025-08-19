import React from "react";
import Countdown from "./Countdown";
import Total from "./Total";
import TeamTotal from "./TeamTotal";
import Donations from "./Donations";

const RightColumn: React.FC = () => {
  //TODO
  return (
    <div className="rightColumn col-md-4 col-sm-12 ">
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
