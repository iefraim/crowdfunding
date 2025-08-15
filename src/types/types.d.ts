export type Team = {
  id: number;
  name: string;
  link?: string;
  goal: number;
  active?: Boolean;
  campaign_id?: number;
  donationsTotal : number;
};

export type Donation = {
  id: number;
  first_name?: string;
  last_name?: string;
  shown_name: string;
  date: string;
  amount: number;
  multiple: number;
  teamid: number;
  comment: string;
  campaign_id?: number;
};
export type Campaign = {
  id?: number;
  name: string;
  goal: number;
  bonus_goal?: number;
  start_date: Date;
  timezone: string;
  end_date: Date;
  active?: Boolean;
  aboutheader:string;
  abouttext:string;
  multiple: number;
  img_url: string;

};
