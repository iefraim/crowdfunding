import React, { createContext, useContext, useState } from "react";

import Donation from "./Donation";
import Filters from "./Filters";

import { DonationContext } from "../context/Provider";
export const FiltersContext = createContext();
const Donations = () => {
  const donations = useContext(DonationContext);
  const [filters, setFilters] = useState({ text: "", sort: "recent" });

  //TODO: set up filters
  //include fitlre bya ctive team
  return (
    <FiltersContext.Provider value={{ setFilters }}>
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
