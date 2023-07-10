import React from "react";
import { Circle } from "rc-progress";
//NOT IN USE
const CountdownCircle = (props) => (
  <div className="countdownCircle">
    <Circle percent={(props.number / props.total) * 100} />
    <p className="countdownCircle__innerText">
      {props.number} {props.item}
      {props.number != 1 && "s"}
    </p>
  </div>
);

export default CountdownCircle;
