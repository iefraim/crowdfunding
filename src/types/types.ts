export type Team = {
  id: Number;
  name: String;
  link: String;
  goal: Number;
  active: Boolean;
  campaign_id: Number;
};

export type Donation = {
  id: Number;
  first_name: String;
  last_name: String;
  shown_name: String;
  date: String;
  amount: Number;
  multiple: Number;
  teamid: Number;
  comment: String;
  campaign_id: Number;
};
export type Data = {
  id: Number;
  name: String;
  goal: Number;
  bonus_goal: Number;
  start_date: Date;
  end_date: Date;
  active: Boolean;
  multiple: Number;
};
