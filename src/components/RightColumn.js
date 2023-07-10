import React from "react";
import Countdown from "./Countdown";
import Donations from "./Donations";
import TotalDisplay from "./TotalDisplay";
import { useDispatch } from "react-redux";

const RightColumn = () => (
  <div className="rightColumn col-md-4 col-sm-12 col-md-push-8">
    <div className="col-xs-12 donatebox donors">
      <Countdown />
      <TotalDisplay />
    </div>

    <Donations />
  </div>
);

export default RightColumn;
