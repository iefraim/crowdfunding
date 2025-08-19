import React, { useEffect } from "react";
import { CampaignContext } from "./Providers";
import { useGetActiveTeam } from "../functions/data";

const HeaderText: React.FC = () => {
  // const activeTeam1 = useContext(TeamLinkContext);
  const {
    data: { start_date, end_date },
  } = React.use(CampaignContext);
  //  const { id, name:teamName } = useFindTeam({ link: activeTeam1 });
  const now = Date.now();
  const activeTeam = useGetActiveTeam();
  const teamName = activeTeam?.name; // Placeholder for team name, replace with actual logic if needed
  const endTime = new Date(end_date).getTime() + 10000;
  const startTime = new Date(start_date).getTime() - 10000;

  const [status, setStatus] = React.useState<"before" | "active" | "ended">(
    now < startTime ? "before" : now > endTime ? "ended" : "active"
  );

  useEffect(() => {
    setStatus(now < startTime ? "before" : now > endTime ? "ended" : "active");
  }, [startTime, endTime]);

  return (
    <>
      {" "}
      {status === "ended" && (
        <div className="timeisup">
          <strong>Wow! Incredible!</strong>
          <br /> Thank you to all our teams and donors – you are AMAZING!
          <br />
          Time may be up, but you can STILL DONATE!
        </div>
      )}
      <div className="col-sm-12 headline mt-4 text-center">
        {teamName && (
          <h1 className="headline-big headerText--big">Team {teamName}</h1>
        )}
      </div>
    </>
  );
};

export default HeaderText;
