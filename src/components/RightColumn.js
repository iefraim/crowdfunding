import React from "react";
import Countdown from "./Countdown";
import Donations from "./Donations";
import { useDispatch } from "react-redux";

const RightColumn = () => (
  <div className="rightColumn col-md-4 col-sm-12 col-md-push-8">
    <Countdown />
    <Donations />
  </div>
);

export default RightColumn;
