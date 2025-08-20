import React from "react";
import { Team } from "../types/types";
import { useTeamDonations } from "../functions/data";
import { NavLink } from "react-router";
import ProgressBar from "./ProgressBar";
import { TeamContext } from "./Providers";

const Team: React.FC<{ team: Team }> = ({ team }) => {
  const donationsTotal = useTeamDonations(team.id).reduce(
    (sum, donation) => sum + parseInt(donation.amount + ""),
    0
  );
  const activeTeam = React.use(TeamContext);

  return (
    <li className="col-xs-12 col-sm-6 team__li">
      <div
        className={`col-xs-12 team__div ${
          activeTeam === team.link ? "active-team" : ""
        }`}
      >
        <NavLink to={`/${team.link}`}>
          <h5 className="team__name">Team {team.name}</h5>
          <ProgressBar
            completed={Math.round((donationsTotal / team.goal) * 100)}
          />

          <p className="team__goal">
            <strong className="team__goal__strong">
              ${donationsTotal.toLocaleString()}
            </strong>
            <br /> out of ${parseInt(team.goal + "").toLocaleString()} raised
          </p>
        </NavLink>
      </div>
    </li>
  );
};

export default Team;
