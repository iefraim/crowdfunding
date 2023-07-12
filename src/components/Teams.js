import React, { useContext } from "react";

import Team from "./Team";

import { TeamContext } from "../context/Provider";
//TODO:style
const Teams = () => {
  const teams = useContext(TeamContext);
  return (
    <div className="div--box teams">
      <div className="row">
        <div className="col-12">
          <div className="teams__header">{teams.length} teams</div>
          <div id="teams">
            <ul id="teams__ul" className="row">
              {teams.map((item) => (
                <Team key={item.id} team={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
