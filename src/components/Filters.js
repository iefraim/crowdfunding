import React, { useContext } from "react";

import { FiltersContext } from "./Donations";
//TODO:Styling
const Filters = () => {
  const { setFilters } = useContext(FiltersContext);
  const updateFilters = () => {
    const text = document.getElementById("filterTextInput").value.trim();
    const sort = document.getElementById("sortFilter").value;
    setFilters({ text, sort });
  };

  return (
    <div className="row filters__searchDiv">
      <div onChange={updateFilters}>
        <div className="col-sm-12 col-md-8">
          <input
            type="search"
            id="filterTextInput"
            className="form-control filter_textBox"
            placeholder="search "
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
    </div>
  );
};

export default Filters;
