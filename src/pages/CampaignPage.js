import { Button } from "components/button";
import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import LayoutDashboard from "layouts/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPage = () => {
   return (
      <LayoutDashboard>
         <div className="flex items-center justify-between px-10 py-8">
            <div className="flex gap-x-[25px]">
               <span className="w-[54px] h-[54px] rounded-full bg-secondary bg-opacity-60 text-white flex items-center justify-center cursor-pointer">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                     />
                  </svg>
               </span>
               <div className="flex flex-col text-sm gap-y-2">
                  <h2 className="text-[22px] font-semibold text-text1">
                     Create Your Campaign
                  </h2>
                  <p className=" text-text3">
                     Jump right into our editor and create your first Virtue
                     campaign!
                  </p>
                  <Link to="/help" className="text-primary">
                     Need any help? Learn More...
                  </Link>
               </div>
            </div>
            <Button
               type="button"
               kind="ghost-secondary"
               // className="bg-secondary bg-opacity-20 text-secondary px-[13px] py-[13px]"
            >
               Start a campaign
            </Button>
         </div>
         <Heading number={4}>Your Campaign</Heading>
         <CampaignGrid type="secondary">
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
         </CampaignGrid>
         <Gap></Gap>
         <Button
            kind="ghost-secondary"
            type="button"
            className="mx-auto w-[200px]"
         >
            See more+
         </Button>
         <Gap></Gap>
         <Heading number={4}>Your Campaign</Heading>
         <CampaignGrid type="secondary">
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
         </CampaignGrid>
         <Gap></Gap>
         <Button
            className="mx-auto w-[200px]"
            kind="ghost-secondary"
            type="button"
         >
            See more+
         </Button>
      </LayoutDashboard>
   );
};

export default CampaignPage;
