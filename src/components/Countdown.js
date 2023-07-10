import React from "react";
import CountdownTimer from "react-countdown";
import { Circle } from "rc-progress";
import { useSelector } from "react-redux";

// const CountdownDisplay=(props)=>(<div>
//     <CountdownCircle number={props.days} total={3} item="day"/>
//     <CountdownCircle number={props.hours} total={24} item="hour"/>
//     <CountdownCircle number={props.minutes} total={60} item="minute"/>
//     <CountdownCircle number={props.seconds} total={60} item="second"/>
// </div>)
//tod0: all numbers need to stay 2 digits
//TODO: why is it blinking
/*TODO: test with mommy to make sure it stays in our timezone
	var hrs = -(new Date().getTimezoneOffset() / 60) ;
 */

let endDate;
const CountdownDisplay = (props) => {
  if (props.completed) {
    return <h6>This event has ended</h6>;
  }
  return (
    <div className="countdownCircle">
      <Circle
        percent={props.total}
        strokeWidth={4}
        trailWidth={4}
        strokeColor={"$primary"}
      />
      <p className="countdownCircle__innerText">
        {props.hours + props.days * 24}H <br />
        {props.minutes < 10 && "0"}
        {props.minutes}m {props.seconds < 10 && "0"}
        {props.seconds}
      </p>
    </div>
  );
};
const Countdown = (props) => {
  if (!props.completed) {
    return <h6>This event hasn't started yet</h6>;
  }
  return <CountdownTimer date={endDate} renderer={CountdownDisplay} />;
};

const PreCountdown = () => {
  const startDate = useSelector((state) => state.data.start_date);
  endDate = useSelector((state) => state.data.end_date);
  if (!startDate) {
    return false;
  }
  return <CountdownTimer date={startDate} renderer={Countdown} />;
};

export default PreCountdown;
