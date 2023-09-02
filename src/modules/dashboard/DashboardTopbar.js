import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
   return (
      <div className="flex items-center">
         <div className="flex items-center flex-1 gap-x-14">
            <img srcSet="/logo.png 2x" alt="crowfunding app" />
            <div className="w-full max-w-[458px]">
               <DashboardSearch></DashboardSearch>
            </div>
         </div>
         <div className="flex items-center justify-end gap-x-10">
            <DashboardFund></DashboardFund>
            <Button className="flex items-center justify-center py-3 text-sm text-white px-7 bg-secondary rounded-xl lg:text-base">
               Start a campaign
            </Button>
            <img
               srcSet="/logo.png 2x"
               alt="crowfunding app"
               className="object-cover rounded-full"
            />
         </div>
      </div>
   );
};

export default DashboardTopbar;
