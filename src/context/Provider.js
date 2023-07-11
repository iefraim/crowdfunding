import React, { useEffect, useState } from "react";
import jquery from "jquery";

export const DonationContext = React.createContext();
export const TeamContext = React.createContext();
export const DataContext = React.createContext();

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
      const JsonData = JSON.parse(dataOb);
      setUp(JsonData);
      updateDonations(JsonData.donations);
    });
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
