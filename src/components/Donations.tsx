import React from "react";
import { useGetActiveTeam, useTeamDonations } from "../functions/data";
import Donation from "./Donation";

const Donations: React.FC = () => {
const activeTeam=useGetActiveTeam();
const teamId=activeTeam?.id??-1;
const donations=useTeamDonations(teamId);

  return (
    <div className="donations">
      filters

      <div className="title-box">Total Donors: {donations.length}</div>
      <ul className="donations">
        {donations.map((i) => (
          <Donation item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
};

export default Donations;
