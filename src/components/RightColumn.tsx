import React from "react";
import Countdown from "./Countdown";
import Total from "./Total";


const RightColumn: React.FC = () => {
//TODO
  return (
    <div className="rightColumn col-md-4 col-sm-12 ">
      <div className="col-xs-12 div--box donors">
        <Countdown />

        <Total/> 
      </div>
        <div className="showMobile">    donate</div>
      <div className="col-xs-12 div--box donors">
        teamtotal
        donations
      </div>
    </div>
  );
};

export default RightColumn;
