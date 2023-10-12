import { useContext } from "react";

import { TeamContext } from "../context/Provider";
import { Team } from "../types/types";

export default ({
  id,
  teamName,
  link,
}: {
  id?: number;
  teamName?: string;
  link?: string;
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
  }
  if (teamName !== undefined) {
    team = teams.filter((i) => i.name == teamName)[0];
  }
  if (link !== undefined) {
    team = teams.filter((i) => i.link == link)[0];
  }
  return team ? team : blankTeam;
};
