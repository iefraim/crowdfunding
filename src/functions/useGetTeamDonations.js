import { useContext } from "react";
import { DonationContext } from "../context/Provider";

export default ({ id }) => {
  return useContext(DonationContext).filter(({ id: teamId }) => id == teamId);
};
