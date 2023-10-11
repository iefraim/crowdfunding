import { useContext } from "react";

import { TeamContext } from "../context/Provider";
import { Team } from "../types/types";

export default ({
  id,
  name: teamName,
  link,
}: {
  id: Number;
  name: String;
  link: String;
}): Team => {
  const blankTeam: Team = {
    id: 0,
    name: "",
    goal: 0,
    link: "",
    active: false,
    campaign_id: -1,
  };
  const teams = useContext(TeamContext);
  let team = teams[0];
  if (!team) return blankTeam;
  if (id !== undefined) {
    team = teams.filter((i) => i.id == id)[0];
  } else if (teamName !== undefined) {
    team = teams.filter((i) => i.name == teamName)[0];
  } else if (link !== undefined) {
    team = teams.filter((i) => i.link == link)[0];
  }
  return team ? team : blankTeam;
};
