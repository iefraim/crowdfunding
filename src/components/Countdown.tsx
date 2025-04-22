import React, { useContext, useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from 'moment-timezone';



import TimerText from "./TimerText";

import { DataContext } from "../context/Provider";

const Countdown: React.FC = () => {
  const { start_date, end_date, timezone } = useContext(DataContext);
    const [now, setNow] = useState(Date.now());
    const [showDayTimer, setShowDayTimer] = useState(1);

  const startTime = new Date(start_date).getTime();

   const endInformation = moment.tz(end_date, timezone).toDate();
  const endTime = endInformation.getTime();


  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 80,
    strokeWidth: 6,
  };

  const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time: number) =>
    ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time: number) =>
    ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time: number) => (time / daySeconds) | 0;

  const nowTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endDate = Math.floor(endTime/ 1000);

  const remainingTime = endDate - nowTime;
    const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;


    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return now < startTime ? (
    <div>Our campaign has not started yet. Please return in a few days.</div>
  ) : now > endTime ? (
    <div ></div>
  ) : (
    <div className="Timer">
        {/*TODO somehow we have to be able to tell that day is 0 should also not show */}
        <div className={!showDayTimer  || daysDuration == 0 ? 'd-none' : ''}>
      <CountdownCircleTimer
        {...timerProps}
        colors="#7a563d"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        onComplete={() => {
            setShowDayTimer(0);
        }}

      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            <TimerText
              dimension="days"
              timeNum={getTimeDays(daysDuration - elapsedTime)}

            />
          </span>
        )}
      </CountdownCircleTimer>
        </div><div

    >
      <CountdownCircleTimer
        {...timerProps}
        colors="#a67553"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => {


            return {
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            };
        }}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            <TimerText
              dimension="hours"
              timeNum={getTimeHours(daySeconds - elapsedTime)}
            />
          </span>
        )}
      </CountdownCircleTimer>
    </div><div>
      <CountdownCircleTimer
        {...timerProps}
        colors="#be977c"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            <TimerText
              dimension="minutes"
              timeNum={getTimeMinutes(hourSeconds - elapsedTime)}
            />
          </span>
        )}
      </CountdownCircleTimer>
    </div>
        <div>
      <CountdownCircleTimer
        {...timerProps}
        colors="#d3baa8"
        duration={minuteSeconds}
        isPlaying={true}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            <TimerText
              dimension="seconds"
              timeNum={getTimeSeconds(elapsedTime)}
            />
          </span>
        )}
      </CountdownCircleTimer>
        </div>
    </div>
  );
};

export default Countdown;
