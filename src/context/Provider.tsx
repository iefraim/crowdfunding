import React, { useEffect, useState, createContext } from "react";
import jquery from "jquery";

import { Donation, Team, Data } from "../types/types";

//dead data
const startData: Data = {
  goal: 0,
  bonus_goal: 0,
  start_date: new Date(),
  end_date: new Date(),
  multiple: 1,
  name: "",
  active: true,
  id: 0,
};
const startTeams: Team[] = [];
const startDonations: Donation[] = []; //end

export const DonationContext = createContext(startDonations);
export const TeamContext = createContext(startTeams);
export const DataContext = createContext(startData);

const Provider = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element | false => {
  const [donations, updateDonations] = useState(startDonations);
  const [{ teams, data }, setUp] = useState({
    teams: startTeams,
    data: startData,
  });

  useEffect(() => {
    jquery.get("data/data.php", (dataOb) => {
      //call once, on mount
      const JsonData = JSON.parse(dataOb);
      setUp(JsonData);
      updateDonations(JsonData.donations);
    });

    setInterval(() => {
      jquery.get("data/data.php", (dataOb) => {
        //update donations
        const JsonData = JSON.parse(dataOb);
        updateDonations(JsonData.donations);
      });
    }, 10000);
  }, []);
  //every 10 secs

  return (
    <DonationContext.Provider value={donations}>
      <TeamContext.Provider value={teams}>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      </TeamContext.Provider>
    </DonationContext.Provider>
  );
};

export default Provider;
