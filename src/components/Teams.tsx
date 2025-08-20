import React from "react";
import { CampaignContext } from "./Providers";
import { useTeamDonations } from "../functions/data";
import Team from "./Team";

const Teams: React.FC = () => {
  const { teams } = React.use(CampaignContext);
  const sortedTeams = teams.sort((a, b) => {
    const donationsA = useTeamDonations(a.id);
    const donationsB = useTeamDonations(b.id);
    const totalA = donationsA.reduce(
      (sum, donation) => sum + donation.amount,
      0
    );
    const totalB = donationsB.reduce(
      (sum, donation) => sum + donation.amount,
      0
    );
    return totalB - totalA;
  });

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
