import React from "react";
import classNames from "utils/classNames";

const CampaignMeta = ({ amount = 0, text = "", textStyle = "small" }) => {
   return (
      <div className="flex flex-col gap-y-[3px]">
         <span
            className={classNames(
               " text-text2",
               textStyle === "small"
                  ? "font-semibold text-sm"
                  : "font-bold text-xl"
            )}
         >
            {amount}
         </span>
         <span
            className={classNames(
               " text-text4",
               textStyle === "small" ? "text-xs" : ""
            )}
         >
            {text}
         </span>
      </div>
   );
};

export default CampaignMeta;
