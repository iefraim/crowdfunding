import { use } from "react"
import { Donation, Team } from "../types/types"
import { CampaignContext, TeamContext } from "../components/Providers"

export const useGetTeam=(id:number):Team|undefined=>{
    const { teams }  = use(CampaignContext);
    return teams.find(team => team.id === id);
}

export const useGetDonation=(id:number):Donation|undefined=>{
    const { donations }  = use(CampaignContext);
    return donations.find(donation => donation.id === id);
}

export const useGetActiveTeam=():Team|undefined=>{
    const { teams }  = use(CampaignContext);
    const activeTeam=use(TeamContext)
    return teams.find(team => team.link===activeTeam);
}