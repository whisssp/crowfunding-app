import { DEFAULT_IMG } from "constants/global";
import React from "react";

const DashboardSearch = ({ show = false }) => {
   return (
      <div className="relative z-50">
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
         {show && (
            <div className="absolute left-0 bg-white top-full rounded-[20px] pb-[25px] lg:w-[823px] w-full mt-5">
               <div className="p-[10px] flex items-center justify-between bg-graySoft rounded-[20px] pl-[25px] mb-5">
                  <span className="underline font-medium text-sm text-text1 cursor-pointer p-[10px]">
                     See all 10,124 fundraisier
                  </span>
                  <button className="px-6 py-[13px] flex items-center justify-center rounded-[10px] bg-error bg-opacity-20 text-error">
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
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
               <div className="flex flex-col gap-y-[15px] mb-[25px]">
                  <SearchItem></SearchItem>
                  <SearchItem></SearchItem>
                  <SearchItem></SearchItem>
                  <SearchItem></SearchItem>
                  <SearchItem></SearchItem>
                  <SearchItem></SearchItem>
               </div>
               <div className="flex flex-col items-start text-sm text-text2 px-[25px] gap-y-[10px]">
                  <h3 className="font-semibold text-text1 mb-[5px]">
                     Related searchs
                  </h3>
                  <p>
                     <span className="font-medium text-text1">education</span>{" "}
                     fund
                  </p>
                  <p>schoralship fund</p>
                  <p>
                     <span className="font-medium text-text1">education</span>{" "}
                     and schools fund
                  </p>
               </div>
            </div>
         )}
      </div>
   );
};

function SearchItem() {
   return (
      <div className="flex items-center gap-x-5 px-[25px]">
         <div className="w-[50px] h-[50px]">
            <img
               src={DEFAULT_IMG}
               alt=""
               className="w-full h-full object-cover rounded-[10px]"
            />
         </div>
         <div className="flex flex-col items-start text-sm">
            <span className="text-text1">
               <strong>Education</strong> fund for Durgham Family
            </span>
            <span className="text-text3">By Durgham Family</span>
         </div>
      </div>
   );
}

export default DashboardSearch;
