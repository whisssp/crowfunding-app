import React from "react";

const DashboardSearch = () => {
   return (
      <div className="pl-4 pr-2 bg-white rounded-full shadow-[10px_10px_20px_0px_rgba(218, 213, 213, 0.15)] w-full h-[52px] flex items-center">
         <div className="flex-1 pl-2 pr-4">
            <input
               type="text"
               className="w-full h-full py-4 text-xs font-normal bg-transparent outline-none lg:text-sm text-text1 placeholder:text-text4 "
               placeholder="Do fundrise now"
            />
         </div>
         <button className=" text-white rounded-full h-10 w-[72px] bg-primary flex items-center justify-center">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="2.5"
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
               />
            </svg>
         </button>
      </div>
   );
};

export default DashboardSearch;
