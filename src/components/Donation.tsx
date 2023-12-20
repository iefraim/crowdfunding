import React, { useContext } from "react";

import useFindTeam from "../functions/useFindTeam";
import { DataContext } from "../context/Provider";
import { Donation } from "../types/types";
import Team from "./Team";
const Donations: React.FC<{ item: Donation }> = ({
  item: { shown_name, amount, teamid, comment },
}) => {
  const { name: teamName } = useFindTeam({ id: teamid });
  const { multiple } = useContext(DataContext);
    const decodeHtmlEntities = (text:any) => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    };
  return (
    <li className="donation">
        <span dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(shown_name) }}></span>


      <span className="rtamt donation__amount">
        ${(amount * multiple).toLocaleString()}
      </span>
      <br />
      <small className="donation__small">
        {comment && (
          <>
              <span dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(comment) }}></span><br />
          </>
        )}

          {teamName && (
              <span>Team {teamName}</span>
          )}
      </small>
    </li>
  );
};

export default Donations;
