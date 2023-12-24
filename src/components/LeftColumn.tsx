import React, {useContext, useEffect, useState} from "react";

import About from "./About";
import Donate from "./Donate";
import Teams from "./Teams";
import {TeamLinkContext} from "../router/Router";
import useFindTeam from "../functions/useFindTeam";
import {DataContext} from "../context/Provider";

const LeftColumn: React.FC = () => {
    const activeTeam1 = useContext(TeamLinkContext);
  const { start_date, end_date } = useContext(DataContext);
      const { id, name:teamName } = useFindTeam({ link: activeTeam1 });
  const [now, setNow] = useState(Date.now());
  const endTime = new Date(end_date).getTime();
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


//TODO move header text into this component
  return (
      <>
        {now > endTime && (
        <div className="timeisup"><strong>Wow! Incredible!</strong><br /> Thank you to all our teams and donors – you are AMAZING!<br />
          Time may be up, but you can STILL DONATE!</div>
        ) }
        <div className="col-sm-12 headline mt-4 text-center">
      {teamName &&  (   <h1 className="headline-big headerText--big">
              Team {teamName }
          </h1>
      )}

  </div>
    <div className="leftColumn col-md-8 col-xs-12 col-md-pull-4 ">

      <About />
        <div className="hideMobile">
      <Donate />
        </div>
      <Teams />
    </div>
      </>
  );
};

export default LeftColumn;
