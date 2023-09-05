import { DEFAULT_IMG } from "constants/global";
import React from "react";

const CampaignAuthor = ({ author }) => {
   return (
      <div className="flex items-center text-xs gap-x-3">
         <img
            // src={author.avatar}
            src={DEFAULT_IMG}
            alt=""
            className="w-[30px] h-[30px] rounded-full object-cover"
         />
         <p>
            by <span className="font-semibold">Mahfuzul Nabil</span>
            {/* by <span className="font-semibold">{author.name}</span> */}
         </p>
      </div>
   );
};

export default CampaignAuthor;
