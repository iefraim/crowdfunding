import { useContext } from "react";
import { DonationContext } from "../context/Provider";

export default (teamId) => {
  return useContext(DonationContext).filter(({ id }) => id == teamId);
};
