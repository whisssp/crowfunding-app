import { IconFolder } from "components/icon";
import React from "react";
import PropTypes from "prop-types";

const CampaignCategory = ({ text = "Education" }) => {
   return (
      <div className="flex items-center font-medium text-text3 gap-x-[10px] mb-[15px]">
         <span>
            <IconFolder></IconFolder>
         </span>
         <span className="self-end text-xs">{text}</span>
      </div>
   );
};

CampaignCategory.propTypes = {
   text: PropTypes.string.isRequired,
};

export default CampaignCategory;
