import React from "react";

import useFindTeam from "../functions/useFindTeam";
//TODO styling
const Donations = ({
  item: { shown_name, amount, multiple, teamid, comment },
}) => {
  const { name: teamName } = useFindTeam({ id: teamid });

  return (
    <li>
      {shown_name}
      <span className="rtamt donation__amount">
        ${(amount * multiple).toLocaleString()}
      </span>
      <br />
      <small>
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
