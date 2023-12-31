import React, { useContext } from "react";

import useFindTeam from "../functions/useFindTeam";
import { DataContext } from "../context/Provider";
import { Donation } from "../types/types";
const Donations: React.FC<{ item: Donation }> = ({
  item: { shown_name, amount, teamid, comment },
}) => {
  const { name: teamName } = useFindTeam({ id: teamid });
  const { multiple } = useContext(DataContext);

  return (
    <li className="donation">
      {shown_name}
      <span className="rtamt donation__amount">
        ${(amount * multiple).toLocaleString()}
      </span>
      <br />
      <small className="donation__small">
        {comment && (
          <>
            {comment} <br />
          </>
        )}
        Team {teamName}
      </small>
    </li>
  );
};

export default Donations;
