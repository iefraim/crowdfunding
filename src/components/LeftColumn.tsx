import React, {useContext} from "react";

import About from "./About";
import Donate from "./Donate";
import Teams from "./Teams";
import {TeamLinkContext} from "../router/Router";
import useFindTeam from "../functions/useFindTeam";

const LeftColumn: React.FC = () => {
    const activeTeam1 = useContext(TeamLinkContext);
      const { id, name:teamName } = useFindTeam({ link: activeTeam1 });

  return (
      <>
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
