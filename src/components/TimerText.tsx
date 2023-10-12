import React from "react";

const TimerText = ({
  dimension,
  timeNum,
}: {
  dimension: String;
  timeNum: number;
}) => {
  const time = "" + timeNum; //avoid ts error
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="words">{dimension}</div>
    </div>
  );
};

export default TimerText;
