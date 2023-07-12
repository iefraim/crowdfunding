import React, { createContext, useContext, useState } from "react";

import Donation from "./Donation";
import Filters, { useFilters } from "./Filters";

import { DonationContext } from "../context/Provider";
import { TeamLinkContext } from "../router/Router";
import useGetTeamDonations from "../functions/useGetTeamDonations";
import useFindTeam from "../functions/useFindTeam";
export const FiltersContext = createContext();
const Donations = () => {
  let donations = useContext(DonationContext);
  const activeTeam = useContext(TeamLinkContext);
  const [filters, setFilters] = useState({ text: "", sort: "recent" });
  if (activeTeam) {
    const { id } = useFindTeam({ link: activeTeam });
    donations = useGetTeamDonations(id);
  }
  donations = useFilters(donations, filters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <Filters />
      <div className="title-box">Total Donors: {donations.length}</div>
      <ul className="donations">
        {donations.map((i) => (
          <Donation item={i} key={i.id} />
        ))}
      </ul>
    </FiltersContext.Provider>
  );
};

export default Donations;
