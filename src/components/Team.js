import React from "react";
import useTeamGetDonations from "../functions/useGetTeamDonations";
import { NavLink } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
const Team = ({ team: { id, name, link, goal } }) => {
  const donations = useTeamGetDonations(id);
  const donationsTotal = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );
  return (
    <li className="col-xs-12 col-sm-6 team__li">
      <div className="col-xs-12 team__div">
        <NavLink to={`/${link}`}>
          <h5 className="team__name">Team {name}</h5>
          <ProgressBar
            completed={Math.round((donationsTotal / goal) * 100)}
            // completedClassName="barCompleted"
            // barContainerClassName="barUncompleted"
          />

          <p className="team__goal">
            <strong className="team__goal__strong">
              ${donationsTotal.toLocaleString()}
            </strong>
            <br /> out of ${parseInt(goal).toLocaleString()} raised
          </p>
        </NavLink>
      </div>
    </li>
  );
};

export default Team;
