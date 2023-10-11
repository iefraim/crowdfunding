import { useContext } from "react";
import { DonationContext } from "../context/Provider";

export default (teamId: Number) => {
  return useContext(DonationContext).filter(({ teamid }) => teamid == teamId);
};
