import React, { createContext, useContext, useState } from "react";

import Donation from "./Donation";
import Filters from "./Filters";

import { DonationContext } from "../context/Provider";
export const FiltersContext = createContext();
//TODO: styling
const Donations = () => {
  const donations = useContext(DonationContext);
  const [filters, setFilters] = useState({ text: "", sort: "recent" });

  //TODO: set up filters

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <Filters />
      <ul>
        {donations.map((i) => (
          <Donation item={i} key={i.id} />
        ))}
      </ul>
    </FiltersContext.Provider>
  );
};

export default Donations;
