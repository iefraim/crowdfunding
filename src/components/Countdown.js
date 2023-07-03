import React from "react";
import CountdownTimer from "react-countdown";
import CountdownCircle from "./CountdownCircle";
import { Circle } from "rc-progress";
import { useSelector } from "react-redux";

// const CountdownDisplay=(props)=>(<div>
//     <CountdownCircle number={props.days} total={3} item="day"/>
//     <CountdownCircle number={props.hours} total={24} item="hour"/>
//     <CountdownCircle number={props.minutes} total={60} item="minute"/>
//     <CountdownCircle number={props.seconds} total={60} item="second"/>
// </div>)

const CountdownDisplay = (props) => {
  return (
    <div className="countdownCircle">
      <Circle percent={props.total} />
      <p className="countdownCircle__innerText">
        {props.hours}:{props.minutes}:{props.seconds}
      </p>
    </div>
  );
};
const Countdown = () => {
  const startDate = useSelector((state) => state.data.start_date);
  const endDate = useSelector((state) => state.data.end_date);
  if (!startDate) {
    return false;
  }
  console.log(startDate, endDate);
  if (Date.parse(startDate) > new Date()) {
    return <h6>This event hasn't started yet</h6>;
  }
  if (Date.parse(endDate) < new Date()) {
    return <h6>This event has ended</h6>;
  }
  return <CountdownTimer date={endDate} renderer={CountdownDisplay} />;
};

export default Countdown;
