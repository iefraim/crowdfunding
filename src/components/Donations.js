import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Donation from "./Donation";
import getTeam from "../functions/getTeam";

import TeamTotal from "./TeamTotal";

let filters, dispatch;

const changeFilters = () => {
  const textInput = document.getElementById("filterTextInput").value.trim();
  const sortInput = document.getElementById("sortFilter").value;
  dispatch({ item: { text: textInput, sort: sortInput }, type: "" });
};
const checkTextFilter = (i) => {
  if (!filters.text) {
    //no text filter
    return true;
  }
  for (let key of Object.keys(i)) {
    const currText = i[key] + "";
    if (currText.includes(filters.text)) {
      return true;
    }
  }
  return false;
};

const sorter = (a, b) => {
  if (filters.sort == "recent") {
    return parseInt(a.id) < parseInt(b.id) ? 1 : -1;
  } else if (filters.sort == "name") {
    return a.shown_name.localeCompare(b.shown_name);
  } else if (filters.sort == "highest") {
    return parseInt(a.amount) * a.multiple < parseInt(b.amount) * b.multiple
      ? 1
      : -1;
  } else {
    return 0;
  }
};

const Donations = () => {
  filters = useSelector((state) => state.filters);
  dispatch = useDispatch();
  const team = getTeam({ link: useSelector((state) => state.openTeam) });
  const donations = useSelector((state) => state.donations) //gets full donation list
    .filter((i) => !team || i.teamid == team.id) //filter out open team's donations
    .filter(checkTextFilter) //search
    .sort(sorter); //sort by selected
  console.log(donations);
  return (
    <>
      <div className="col-xs-12 donatebox donors">
        <TeamTotal />
        <div className="title-box">Total Donors: {donations.length}</div>
        <div className="row" id="search-div">
          <div className="col-sm-12 col-md-8">
            <input
              onChange={changeFilters}
              type="search"
              id="filterTextInput"
              className="form-control"
              placeholder="search "
            ></input>
          </div>
          <div className="col-sm-12 col-md-4">
            <select
              id="sortFilter"
              onChange={changeFilters}
              className="form-control"
            >
              <option>Sort By</option>
              <option value="recent">Latest</option>
              <option value="highest">Highest</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <ul className="" id="donation-list">
          {donations.map((item, key) => (
            <Donation key={key} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Donations;
