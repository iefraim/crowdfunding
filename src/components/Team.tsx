import React, { useContext } from "react";
import useTeamGetDonations from "../functions/useGetTeamDonations";
import { DataContext } from "../context/Provider";
import { NavLink } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { Team } from "../types/types";
const Team: React.FC<{ team: Team }> = ({ team: { id, name, link, goal } }) => {
  const donations = useTeamGetDonations(id);
  const { multiple } = useContext(DataContext);
  const donationsTotal = donations.reduce(
    (prev, curr) => prev + curr.amount * multiple,
    0
  );


  return (
    <li className="col-xs-12 col-sm-6 team__li">
      <div className="col-xs-12 team__div">
        <NavLink to={`/${link}`}>
          <h5 className="team__name">Team {name}</h5>
          <ProgressBar
            completed={Math.round((donationsTotal / goal) * 100)}
            barContainerClassName="barUncompleted"
          />

          <p className="team__goal">
            <strong className="team__goal__strong">
              ${donationsTotal.toLocaleString()}
            </strong>
            <br /> out of ${parseInt(goal + "").toLocaleString()} raised
          </p>
        </NavLink>
      </div>
    </li>
  );
};

export default Team;
