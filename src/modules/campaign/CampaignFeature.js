import { DEFAULT_IMG } from "constants/global";
import React from "react";
import CampaignPoster from "./parts/CampaignPoster";
import classNames from "utils/classNames";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = (img = DEFAULT_IMG, className = "mb-10") => {
   return (
      <div
         className={classNames(
            "flex lg:gap-[30px] flex-col lg:flex-row",
            className
         )}
      >
         <CampaignPoster
            containerClassName="h-[266px] w-full max-w-[583px]"
            imageClassName="rounded-[25px]"
         />
         <div className="flex-1 py-5 max-w-[435px]">
            <CampaignCategory text="Architecture" />
            <CampaignTitle className="mb-[15px] font-bold text-xl">
               Remake - We Make architecture exhibition
            </CampaignTitle>
            <CampaignDesc className="text-sm mb-[22px]">
               Remake - We Make: an exhibition about architecture's social
               agency in the face of urbanisation
            </CampaignDesc>
            <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-[22px]">
               <div className="w-2/3 h-full rounded-full bg-primary"></div>
            </div>
            <div className="flex items-start gap-x-[31px] lg:gap-x-[65px] justify-between">
               <CampaignMeta
                  textStyle="large"
                  amount={"$2,000"}
                  text="Raised of $2,500"
               ></CampaignMeta>
               <CampaignMeta
                  textStyle="large"
                  amount={"173"}
                  text="Total backers"
               ></CampaignMeta>
               <CampaignMeta
                  textStyle="large"
                  amount={"30"}
                  text="Days left"
               ></CampaignMeta>
            </div>
         </div>
      </div>
   );
};

export default CampaignFeature;
