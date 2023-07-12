import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { TeamLinkContext } from "../router/Router";
import useTeamGetDonations from "../functions/useGetTeamDonations";
import useFindTeams from "../functions/useFindTeam";
import { NavLink, useNavigate } from "react-router-dom";
const TeamTotal = () => {
  const link = useContext(TeamLinkContext);
  if (!link) return false; //no open team
  const { id, name, goal } = useFindTeams({ link });
  if (!id) return useNavigate()("/"); //team doesn't exist
  const donations = useTeamGetDonations(id);
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
          <p className="col-sm-12">Team {name}</p>
        </div>

        <>
          <ProgressBar completed={Math.round((donationsTotal / goal) * 100)} />

          <div className="teamsum">
            ${donationsTotal.toLocaleString()} out of $
            {parseInt(goal).toLocaleString()} raised
          </div>
        </>
      </div>
    </>
  );
};

export default TeamTotal;
