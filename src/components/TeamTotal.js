import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { TeamLinkContext } from "../router/Router";
import useTeamGetDonations from "../functions/useGetTeamDonations";
import useFindTeams from "../functions/useFindTeam";
import { redirect } from "react-router-dom";
//TODO
const TeamTotal = () => {
  const link = useContext(TeamLinkContext);
  if (!link) return false; //no open team
  const team = useFindTeams({ link });
  if (!team[id]) return redirect("/"); //team doesn't exist
  const donations = useTeamGetDonations(team);
  const donationsTotal = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );
  return (
    <>
      <div className="close-team">
        <p className="text-center">
          <NavLink to="/">VIEW ALL</NavLink>
        </p>
      </div>
      <div id="teamamount">
        <div className="teamname">
          <p className="col-sm-12">Team {team.name}</p>
        </div>

        <div>
          <ProgressBar
            completed={Math.round((donationsTotal / team.goal) * 100)}
          />

          <div className="teamsum">
            ${donationsTotal.toLocaleString()} out of $
            {parseInt(team.goal).toLocaleString()} raised
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTotal;
