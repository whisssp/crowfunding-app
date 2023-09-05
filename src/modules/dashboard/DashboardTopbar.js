import React from "react";
import DashboardSearch from "./DashboardSearch";
import DashboardFund from "./DashboardFund";
import { Button } from "components/button";

const DashboardTopbar = () => {
   return (
      <div className="flex items-center mb-8 ">
         <div className="flex items-center flex-1 pl-3 gap-x-14">
            <img srcSet="/logo.png 2x" alt="crowfunding app" />
            <div className="w-full max-w-[458px]">
               <DashboardSearch></DashboardSearch>
            </div>
         </div>
         <div className="flex items-center justify-end gap-x-10">
            <DashboardFund></DashboardFund>
            <Button href="/create-campaign" kind="secondary">
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
