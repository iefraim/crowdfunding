import React, { useContext } from "react";

import {TeamLinkContext} from "../router/Router";
import useFindTeams from "../functions/useFindTeam";

const HeaderText: React.FC = () => {
  // const { aboutheader } = useContext(DataContext);
    const link = useContext(TeamLinkContext);
    if (link) return false; //no open team
    const {  name } = useFindTeams({ link });

  return (
    <div className="col-sm-12 headline mt-4 text-center">
        {name &&  (   <h1 className="headline-big headerText--big">
          {name }
      </h1>
            )}
     <h2 className="headerText__h1">
     {/*Every contribution makes a difference. You make a difference!*/}
     </h2>
    </div>
  );
};

export default HeaderText;
