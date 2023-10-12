import React from "react";

const TimerText: React.FC<{ dimension: string; timeNum: number }> = ({
  dimension,
  timeNum,
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
