import { CampaignContext } from "./Providers";
import React from "react";
const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const About: React.FC = () => {
  const {
    data: { abouttext },
  } = React.use(CampaignContext);
  const decodedHtml = decodeHtml(abouttext);

  return (
    //make tabbed div

    <div className="div--box">
      <h3>ABOUT CAMPAIGN</h3>
      <div className="aboutText">
        <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
      </div>
    </div>
  );
};

export default About;
