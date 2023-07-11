import { useContext } from "react";

import { TeamContext } from "../context/Provider";

export default ({ id, name: teamName, link }) => {
  const teams = useContext(TeamContext);
  if (id !== undefined) {
    return teams.filter((i) => i.id == id)[0];
  } else if (teamName !== undefined) {
    return teams.filter((i) => i.name == teamName)[0];
  } else if (link !== undefined) {
    return teams.filter((i) => i.link == link)[0];
  } else {
    return teams[0];
  }
};
