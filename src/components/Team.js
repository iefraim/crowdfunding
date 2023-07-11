import React from "react";
//TODO
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
    <li className="col-xs-12 col-sm-6">
      <div className="teamdiv">
        <NavLink to={`/${link}`}>
          <span className="col-xs-12 teambox">
            <h5>Team {name}</h5>
            <ProgressBar
              completed={Math.round((donationsTotal / goal) * 100)}
              completedClassName="barCompleted"
              barContainerClassName="barUncompleted"
            />

            <p className="teamgoallisting">
              <strong>${donationsTotal.toLocaleString()}</strong>
              <br /> out of ${parseInt(goal).toLocaleString()} raised
            </p>
          </span>
        </NavLink>
      </div>
    </li>
  );
};

export default Team;
