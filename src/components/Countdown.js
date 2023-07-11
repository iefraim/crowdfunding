import React, { useContext } from "react";
import CountdownTimer from "react-countdown";
import { Circle } from "rc-progress";

import { DataContext } from "../context/Provider";

//TODO: styling
const Countdown = () => {
  const { start_date, end_date } = useContext(DataContext);
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);
  return (
    <CountdownTimer
      date={startDate}
      renderer={({ completed }) => {
        if (!completed)
          //before start
          return <h6>this event hasn't yet started</h6>;
        return (
          <CountdownTimer
            date={endDate}
            renderer={({ hours, days, minutes, seconds, completed, total }) => {
              if (completed)
                //post event
                return <h6>this event has ended</h6>;
              const totalTime = endDate - startDate;
              const totalHours = days * 24 + hours;
              return (
                <>
                  <Circle
                    percent={(total / totalTime) * 100}
                    strokeWidth={4}
                    trailWidth={4}
                    // strokeColor={"$primary"}
                  />
                  <p className="countdownCircle__innerText">
                    {totalHours}H <br />
                    {minutes < 10 && "0"}
                    {minutes}m {seconds < 10 && "0"}
                    {seconds}
                  </p>
                </>
              );
            }}
          />
        );
      }}
    />
  );
};

export default Countdown;
