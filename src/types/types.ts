export type Team = {
  id: number;
  name: String;
  link?: String;
  goal: number;
  active?: Boolean;
  campaign_id?: number;
};

export type Donation = {
  id: number;
  first_name?: String;
  last_name?: String;
  shown_name: String;
  date: String;
  amount: number;
  multiple: number;
  teamid: number;
  comment: String;
  campaign_id?: number;
};
export type Data = {
  id?: number;
  name: String;
  goal: number;
  bonus_goal?: number;
  start_date: Date;
  end_date: Date;
  active?: Boolean;
  multiple: number;
};
