import React from "react";
import PropTypes from "prop-types";
import CampaignPoster from "./parts/CampaignPoster";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignAuthor from "./parts/CampaignAuthor";
import { DEFAULT_IMG } from "constants/global";

//

const CampaignItem = ({ campaignInfo = {} }) => {
   return (
      <div className="bg-white shadow-campaign rounded-[15px]">
         <CampaignPoster imagePath={DEFAULT_IMG} />
         <div className="px-5 py-[15px]">
            <CampaignCategory text="Education" />
            <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
            <CampaignDesc>
               Fun, durable and reusable boxes with eco-friendly options.
            </CampaignDesc>
            <div className="flex justify-between mb-5 items-start gap-x-[50px]">
               <CampaignMeta amount="$2000" text="Raised of $1,900" />
               <CampaignMeta amount="173" text="Total backers" />
            </div>
            <CampaignAuthor></CampaignAuthor>
         </div>
      </div>
   );
};

CampaignItem.propTypes = {
   campaignInfo: PropTypes.object,
};

export default CampaignItem;
