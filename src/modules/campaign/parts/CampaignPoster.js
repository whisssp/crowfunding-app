import { DEFAULT_IMG } from "constants/global";
import React from "react";
import classNames from "utils/classNames";

const CampaignPoster = ({
   containerClassName = "h-[158px]",
   imageClassName = "rounded-[15px]",
   imagePath = DEFAULT_IMG,
   alt = "",
}) => {
   return (
      <div className={containerClassName}>
         <img
            src={imagePath}
            alt={alt}
            className={classNames("object-cover w-full h-full", imageClassName)}
         />
      </div>
   );
};

export default CampaignPoster;
