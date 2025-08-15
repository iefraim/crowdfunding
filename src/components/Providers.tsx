import React, { ReactNode } from 'react';
import { useParams,Link } from 'react-router';
import { Campaign, Donation, Team } from '../types/types';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import HeaderText from './HeaderText';

const getData=async()=>
{
  const response = await fetch(`data/data.json`);
  const dataOb = await response.json();
  return dataOb;
}

const startData: Campaign = {
  goal: 0,
  bonus_goal: 0,
  start_date: new Date(),
  end_date: new Date(),
  timezone: "",
  multiple: 1,
  name: "",
  active: true,
  id: 0,
  aboutheader: "",
  abouttext: "",
  img_url:""
};

export const CampaignContext = React.createContext<{teams:Team[],donations:Donation[],data:Campaign}>(
    {teams:[], donations:[], data:startData});
export const TeamContext = React.createContext<string>("");

const Providers: React.FC = () => {
    const params = useParams();
    const teamLink = params.teamLink ? params.teamLink : "";
    const [campaignInfo,setCampaignInfo] = React.useState<{teams:Team[],donations:Donation[],data:Campaign}>({ teams: [], donations: [], data: startData });
React.useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`data/data.php?nocache=${new Date().getTime()}`);
        const response = await fetch(`data/data.json`);
        const dataOb = await response.json();        
        setCampaignInfo(dataOb);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const intervalId = setInterval(fetchData, 1000); // update donations every 1 secs

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);



    return (
            <CampaignContext.Provider value={campaignInfo}>
               <Header />
               <TeamContext.Provider value={teamLink}>
                <HeaderText/>
                   <LeftColumn/>
                   <RightColumn/>
               </TeamContext.Provider>
            </CampaignContext.Provider>
        
    );
};


export default Providers;