import React, { useContext } from "react";

import Team from "./Team";

import { TeamContext } from "../context/Provider";
//TODO:style
const Teams = () => {
  const teams = useContext(TeamContext);
  return (
    <div className="donatebox teams">
      <div className="row">
        <div className="col-12">
          <div className="title-box">{teams.length} teams</div>
          <div id="teams">
            <ul id="teams-list" className="row">
              {teams.map((item) => (
                <Team key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
