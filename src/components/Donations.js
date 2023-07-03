import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Donation from "./Donation";
import getTeam from "../functions/getTeam";
import TotalDisplay from "./TotalDisplay";
import TeamTotal from "./TeamTotal";
import { NavLink } from "react-router-dom";

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
    <div>
      <div className="col-xs-12 donatebox donors">
        <TotalDisplay />
        <TeamTotal />

        <div className="close-team">
          <p className="text-center">
            <NavLink to="/">VIEW ALL</NavLink>
          </p>
        </div>
        <div>
          <p>Total Donors: {donations.length}</p>
        </div>
        <input
          onChange={changeFilters}
          id="filterTextInput"
          className="form-control"
          placeholder="search donations"
        ></input>
        <select id="sortFilter" onChange={changeFilters}>
          <option value="recent">recent</option>
          <option value="name">name</option>
        </select>
        <ul className="" id="" style={{ overflowY: "scroll", height: "600px" }}>
          {donations.map((item, key) => (
            <Donation key={key} item={item} />
          ))}
        </ul>
      </div>{" "}
    </div>
  );
};

export default Donations;
