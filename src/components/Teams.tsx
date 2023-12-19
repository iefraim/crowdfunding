import React, { useContext } from "react";

import Team from "./Team";

import {DataContext, TeamContext} from "../context/Provider";
import useTeamGetDonations from "../functions/useGetTeamDonations";
const Teams: React.FC = () => {
  const teams = useContext(TeamContext);
  const { multiple } = useContext(DataContext);

  Object.entries(teams).forEach(([key, value]) => {
    const donations = useTeamGetDonations(value.id);
    const donationsTotal = donations.reduce(
        (prev, curr) => prev + curr.amount * multiple,
        0
    );
    //push to team new key donationstotal
    value.donationsTotal = donationsTotal || 0 ;

  });

  const sortedTeams = teams.slice().sort((a, b) => b.donationsTotal - a.donationsTotal);



  return (
    <div className="div--box teams">
      <div className="row">
        <div className="col-12">
          <div className="teams__header">{teams.length} teams</div>
          <div id="teams">
            <ul id="teams__ul" className="row">
              {sortedTeams.map((item) => (
                <Team key={item.id} team={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
