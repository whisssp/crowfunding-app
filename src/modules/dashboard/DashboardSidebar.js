import {
   IconCampaign,
   IconDarkMode,
   IconDashboard,
   IconPayment,
   IconProfile,
   IconWithDraw,
} from "components/icon";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

const sidebarLinks = [
   {
      icon: <IconDashboard></IconDashboard>,
      title: "Dashboard",
      link: "/",
      onClick: () => {},
   },
   {
      icon: <IconCampaign></IconCampaign>,
      title: "Campaign",
      url: "/campaign",
      onClick: () => {},
   },
   {
      icon: <IconPayment></IconPayment>,
      title: "Payment",
      url: "/payment",
      onClick: () => {},
   },
   {
      icon: <IconWithDraw />,
      title: "Withdraw",
      url: "/withdraw",
      onClick: () => {},
   },
   {
      icon: <IconProfile />,
      title: "Profile",
      url: "/profile",
      onClick: () => {},
   },
   {
      icon: <IconDarkMode />,
      title: "Light/Dark",
      url: "/darkmode",
      onClick: () => {},
   },
];

const DashboardSidebar = () => {
   const navLinkClassName =
      "w-full p-[10px] md:h-12 md:w-12  last:mt-auto last:md:shadow-sdprimary rounded-[10px] last:bg-white flex items-center gap-x-5 md:justify-center";

   return (
      <div className="flex-shrink-0 w-full flex flex-col md:items-center md:w-[76px] md:h-[733px] md:gap-y-[30px] gap-y-[15px] bg-white rounded-[20px] md:px-[14px] md:py-10 pb-[34px] pt-0 shadow-[10px_10px_20px_0px_rgba(218, 213, 213, 0.15);]">
         {sidebarLinks.map((link) => {
            return (
               <NavLink
                  to={link.url}
                  key={v4()}
                  className={({ isActive }) =>
                     isActive
                        ? `bg-primary bg-opacity-20 text-primary ${navLinkClassName}`
                        : `${navLinkClassName} text-icon-color`
                  }
               >
                  <span>{link.icon}</span>
                  <span className="md:hidden">{link.title}</span>
               </NavLink>
            );
         })}
      </div>
   );
};

export default DashboardSidebar;
