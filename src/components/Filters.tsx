import React, { useContext } from "react";

import { FiltersContext } from "./Donations";
import { Donation } from "../types/types";

export type FiltersType = {
  sort: "recent" | "highest" | "name";
  text: string;
};

export const useFilters = (donations: Donation[], filters: FiltersType) => {
  const { text, sort } = filters;
  donations = donations.filter((i) => {
    if (i.shown_name.toLowerCase().includes(text.toLowerCase())) return true;
    else return false;
  });

  donations = donations.sort((a, b) => {
    if (sort == "recent") return a.id > b.id ? -1 : 1;
    if (sort == "highest")
      return a.amount * a.multiple > b.amount * b.multiple ? -1 : 1;
    if (sort == "name")
      return a.shown_name.toLowerCase() < b.shown_name.toLowerCase() ? -1 : 1;
    console.error("bad filter");
    return 1;
  });

  return donations;
};
const Filters = () => {
  const filtersContext = useContext(FiltersContext)
    ? useContext(FiltersContext)
    : false;
  if (!filtersContext) return false;
  const { setFilters } = filtersContext;

  const updateFilters = () => {
    const textInput: HTMLInputElement | null = document.getElementById(
      "filterTextInput"
    ) as HTMLInputElement | null;
    const sortInput = document.getElementById(
      "sortFilter"
    ) as HTMLInputElement | null;
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
