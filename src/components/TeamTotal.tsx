import React, { useContext } from "react";
import ProgressBar from "./ProgressBar";
import { useGetActiveTeam, useTeamDonations } from "../functions/data";
import { useNavigate, NavLink } from "react-router";
import { TeamContext } from "./Providers";
const TeamTotal: React.FC = () => {
  const team = useGetActiveTeam();
  const navigate = useNavigate();
  const teamLink = React.use(TeamContext);
  if (!team) {
    return false;
  } //team doesn't exist
  const donations = useTeamDonations(team.id);
  const donationsTotal = donations.reduce(
    (prev, curr) => prev + curr.amount * curr.multiple,
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

        <>
          <ProgressBar
            completed={Math.round((donationsTotal / team.goal) * 100)}
          />

          <div className="teamsum mt-2">
            ${donationsTotal.toLocaleString()} out of $
            {(team.goal * 1).toLocaleString()} raised
          </div>
        </>
      </div>
    </>
  );
};

export default TeamTotal;
