import React, { createContext, useContext, useState } from "react";

import Donation from "./Donation";
import Filters, { FiltersType, useFilters } from "./Filters";

import { DonationContext } from "../context/Provider";
import { TeamLinkContext } from "../router/Router";
import useGetTeamDonations from "../functions/useGetTeamDonations";
import useFindTeam from "../functions/useFindTeam";

const baseFilters: FiltersType = { text: "", sort: "recent" };

export const FiltersContext = createContext<
  | {
      filters: FiltersType;
      setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
    }
  | undefined
>(undefined);
const Donations = (): React.JSX.Element | false => {
  let donations = useContext(DonationContext);
  const activeTeam = useContext(TeamLinkContext);
  const [filters, setFilters] = useState(baseFilters);
  if (activeTeam) {
    const { id } = useFindTeam(undefined, undefined, activeTeam);
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
