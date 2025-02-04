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
  aboutheader: "",
  abouttext: "",
  img_url:"https://zeraabraham.com/wp-content/uploads/2023/12/1.jpg"
};
const startTeams: Team[] = [];
const startDonations: Donation[] = []; //end

export const DonationContext = createContext(startDonations);
export const TeamContext = createContext(startTeams);
export const DataContext = createContext(startData);

const Provider: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const [donations, updateDonations] = useState(startDonations);
  const [{ teams, data }, setUp] = useState({
    teams: startTeams,
    data: startData,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`data/data.php?nocache=${new Date().getTime()}`);
        const dataOb = await response.json();
        setUp(dataOb);
        updateDonations(dataOb.donations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



    fetchData(); // call once, on mount

    const intervalId = setInterval(fetchData, 10000); // update donations every 10 secs

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <DonationContext.Provider value={donations}>
      <TeamContext.Provider value={teams}>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      </TeamContext.Provider>
    </DonationContext.Provider>
  );
};

export default Provider;
