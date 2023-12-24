import React, {useContext, useState} from "react";

import {TeamLinkContext} from "../router/Router";
import useFindTeam from "../functions/useFindTeam";

const HeaderText: React.FC = () => {
  // const { aboutheader } = useContext(DataContext);
    const activeTeam1 = useContext(TeamLinkContext);

    if (activeTeam1) {
        const { id, name:teamName } = useFindTeam({ link: activeTeam1 });
    }

// console.log(teamName);
  return (
    <div className="col-sm-12 headline mt-4 text-center">
      {/*  {teamName &&  (   <h1 className="headline-big headerText--big">*/}
      {/*    {teamName }*/}
      {/*</h1>*/}
      {/*      )}*/}
     <h2 className="headerText__h1">
     {/*Every contribution makes a difference. You make a difference!*/}
     </h2>
    </div>
  );
};

export default HeaderText;
