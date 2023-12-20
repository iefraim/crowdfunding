import React, { useContext } from "react";

import { FiltersContext } from "./Donations";
import { Donation } from "../types/types";

export type FiltersType = {
  sort: "recent" | "highest" | "name";
  text: string;
};

export const useFilters = (
  donations: Donation[],
  filters: FiltersType
): Donation[] => {
  const { text, sort } = filters;
  donations = donations.filter((i) => {
    if (i.shown_name.toLowerCase().includes(text.toLowerCase())) return true;
    else return false;
  });

  donations = donations.sort((a, b) => {
    if (sort === "recent") return b.id - a.id; // Sorting by descending order of id for recent
    if (sort === "highest") return b.amount - a.amount; // Sorting by descending order of amount for highest
    if (sort === "name") return a.shown_name.toLowerCase().localeCompare(b.shown_name.toLowerCase()); // Sorting by name in alphabetical order

    console.error("bad filter");
    return 0; // Default return
  });
  return donations;
};
const Filters: React.FC = () => {
  const filtersContext = useContext(FiltersContext);
  if (!filtersContext) return false;
  const { setFilters } = filtersContext;

  const updateFilters = (): void => {
    const textInput: HTMLInputElement | null = document.getElementById(
      "filterTextInput"
    ) as HTMLInputElement | null;
    const sortInput = document.getElementById(
      "sortFilter"
    ) as HTMLSelectElement | null;
    const text = textInput ? textInput.value.trim() : "";
    const sort = sortInput
      ? (sortInput.value as "recent" | "highest" | "name")
      : "recent";
    setFilters({ text, sort });
  };

  return (
    <div className="row filters__searchDiv" onChange={updateFilters}>
      <div className="col-sm-12 col-md-8">
        <input
          type="search"
          id="filterTextInput"
          className="form-control filter_textBox"
          placeholder="search"
        ></input>
      </div>
      <div className="col-sm-12 col-md-4">
        <select id="sortFilter" className="form-control filters__text">
          <option>Sort By</option>
          <option value="recent">Latest</option>
          <option value="highest">Highest</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
