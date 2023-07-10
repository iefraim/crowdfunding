import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const Team = (props) => {
  const donations = useSelector((state) => state.donations).filter(
    (i) => i.teamid == props.item.id
  );
  const totalDonations = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );
  //TODO: Get background of only completed part to be primary
  return (
    <li className="col-xs-12 col-sm-6">
      <div className="teamdiv">
        <NavLink to={`/${props.item.link}`}>
          <span className="col-xs-12 teambox">
            <h5>Team {props.item.name}</h5>
            <ProgressBar
              completed={Math.round((totalDonations / props.item.goal) * 100)}
              completedClassName="barCompleted"
              barContainerClassName="barUncompleted"
            />

            <p className="teamgoallisting">
              <strong>${totalDonations.toLocaleString()}</strong>
              <br /> out of ${parseInt(props.item.goal).toLocaleString()} raised
            </p>
          </span>{" "}
        </NavLink>
      </div>
    </li>
  );
};

export default Team;
