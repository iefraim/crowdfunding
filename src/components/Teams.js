import React from "react";
import { useSelector } from "react-redux";
import Team from "./Team";

const Teams = () => {
  const teams = useSelector((state) => state.teams);
  return (
    <div className="donatebox teams">
      <div className="row">
        <div className="col-12">
          <div className="title-box">{teams.length} teams</div>
          <div id="teams">
            <ul id="teams-list" className="row">
              {teams.map((item, key) => (
                <Team key={key} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
