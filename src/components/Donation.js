import React from "react";

import useFindTeam from "../functions/useFindTeam";
const Donations = ({
  item: { shown_name, amount, multiple, teamid, comment },
}) => {
  const { name: teamName } = useFindTeam({ id: teamid });

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
