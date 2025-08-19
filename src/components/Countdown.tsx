import React, { useEffect, useState } from "react";
import { CampaignContext } from "./Providers";
import CountdownCircle from "./CountdownCircle";

const Countdown: React.FC = () => {
  const {
    data: { start_date, end_date },
  } = React.use(CampaignContext);
  const [now, setNow] = useState(Date.now());
  const startTime = new Date(start_date).getTime();
  const endTime = new Date(end_date).getTime();
  const status =
    now < startTime ? "before" : now > endTime ? "ended" : "active";
  const diffInTime = endTime - now;
  const days = Math.ceil(diffInTime / (1000 * 3600 * 24));
  const hours = Math.ceil((diffInTime % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.ceil((diffInTime % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.ceil((diffInTime % (1000 * 60)) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  switch (status) {
    case "before":
      return (
        <div>
          Our campaign has not started yet. Please return in a few days.
        </div>
      );
    case "ended":
      return;
    case "active":
      return (
        <div className="timer">
          {days > 0 && (
            <CountdownCircle
              time={days}
              totaltime={days}
              color="#7a563d"
              dimension="days"
            />
          )}
          <CountdownCircle
            time={hours}
            totaltime={24}
            color="#a67553"
            dimension="hours"
          />
          <CountdownCircle
            time={minutes}
            totaltime={60}
            color="#be977c"
            dimension="minutes"
          />
          <CountdownCircle
            time={seconds}
            totaltime={60}
            color="#d3baa8"
            dimension="seconds"
          />
        </div>
      );
  }
};

export default Countdown;
