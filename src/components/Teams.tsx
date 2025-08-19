import React from "react";
import { CampaignContext } from "./Providers";
import { useTeamDonations } from "../functions/data";

const Team = ({ team }: any) => {
  const donations = useTeamDonations(team.id);
  return (
    <li className="col-12 col-md-6 col-lg-4">
      <div className="team">
        <div className="team__name">{team.name}</div>
        <div className="team__donations"></div>
      </div>
    </li>
  );
};

const Teams: React.FC = () => {
  const { teams } = React.use(CampaignContext);
  const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

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
