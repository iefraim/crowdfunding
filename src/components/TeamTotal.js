import React from "react";
import { useSelector } from "react-redux";
import getTeam from "../functions/getTeam";
import ProgressBar from "@ramonak/react-progress-bar";

const TeamTotal = () => {
  const team = getTeam({ link: useSelector((state) => state.openTeam) });

  const allDonations = useSelector((state) => state.donations);

  if (!team) {
    return false;
  }

  const donations = allDonations.filter((i) => i.teamid == team.id);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );

  //TODO veiw all shouldb e visible only i fteams
  return (
    <div id="teamamount">
      <div className="teamname">
        <p className="col-sm-12">Team {team.name}</p>
      </div>

      <div>
        <ProgressBar
          completed={Math.round((totalDonations / team.goal) * 100)}
        />

        <div className="teamsum">
          {" "}
          ${totalDonations.toLocaleString()} out of $
          {parseInt(team.goal).toLocaleString()} raised
        </div>
      </div>
    </div>
  );
};

export default TeamTotal;
