import React from 'react';
import { Donation } from '../types/types';
import { useGetTeam } from '../functions/data';


const Donations: React.FC<{ item: Donation }> = ({
  item: { shown_name, amount, teamid, comment, multiple },
}) => {
    const { name: teamName } = useGetTeam(teamid) || {};
  return (
    <li className="donation">
        <span>{shown_name}</span>


      <span className="rtamt donation__amount">
        ${(amount * multiple).toLocaleString()}
      </span>
      <br />
      <small className="donation__small">
        {comment && (
          <>
              <span>{comment}</span><br />
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