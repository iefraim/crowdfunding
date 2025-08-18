import React from "react";
import { useGetActiveTeam, useTeamDonations } from "../functions/data";
import Donation from "./Donation";
import Filters from "./Filters";
import { Donation as DonationType } from "../types/types";

const Donations: React.FC = () => {
const activeTeam=useGetActiveTeam();
const teamId=activeTeam?.id??-1;
const [filters,setFilters] = React.useState({ text: "", sort: "recent" });

const donationFilter = (donation: DonationType) => {
  const { text, sort } = filters;
  // Apply text filter
  return !text ||//no text filter
   donation.shown_name.toLowerCase().includes(text.toLowerCase())//included in filter
};

const donationSorter = (a: DonationType, b: DonationType) => {
  const { sort } = filters;
  switch (sort) {
    case "highest":
      return b.amount - a.amount;
    case "name":
      return a.shown_name.localeCompare(b.shown_name);
    default: // Default to recent
      return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
};

const donations=useTeamDonations(teamId).filter(donationFilter).sort(donationSorter);

  return (
    <div className="donations">
      <Filters filters={filters} setFilters={setFilters} />

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
