import { useContext } from "react";

import { TeamContext } from "../context/Provider";

export default ({ id, name: teamName, link }) => {
  const teams = useContext(TeamContext);
  let team = teams[0];
  if (!team) return { id: 1, name: "", goal: 0 };
  if (id !== undefined) {
    team = teams.filter((i) => i.id == id)[0];
  } else if (teamName !== undefined) {
    team = teams.filter((i) => i.name == teamName)[0];
  } else if (link !== undefined) {
    team = teams.filter((i) => i.link == link)[0];
  }
  return team ? team : { id: 0, name: "", goal: 0 };
};
