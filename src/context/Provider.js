import React, { useEffect, useState, createContext } from "react";
import jquery from "jquery";

export const DonationContext = createContext();
export const TeamContext = createContext();
export const DataContext = createContext();

const Provider = ({ children }) => {
  const [donations, updateDonations] = useState([]);
  const [{ teams, data }, setUp] = useState({
    teams: [],
    data: {
      goal: 0,
      bonus_goal: 0,
      start_date: new Date(),
      end_date: new Date(),
      multiple: 1,
    },
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
