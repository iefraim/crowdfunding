import React, { useContext } from "react";
import { DataContext } from "../context/Provider";
import Countdown from "./Countdown";

import Total from "./Total";
import Donations from "./Donations";
import TeamTotal from "./TeamTotal";

const RightColumn = () => {
  const { start_date, end_date } = useContext(DataContext);
  const startTime = new Date(start_date);
  const endTime = new Date(end_date);
  const now = Date.now();
  return (
    <div className="rightColumn col-md-4 col-sm-12 col-md-push-8">
      <div className="col-xs-12 div--box donors">
        {now < startTime && (
          <div>
            Our campaign has not started yet. Please return in a few days.
          </div>
        )}
        {now > endTime ? (
          <div>Time is up. Thank you to all our donors!</div>
        ) : (
          <Countdown />
        )}

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
