import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ checked = false, onClick = () => {}, name, children }) => {
   return (
      <div className="flex flex-start gap-x-3">
         <div
            className={`cursor-pointer p-1 w-5 h-5 border rounded text-white inline-flex items-center justify-center dark:border-darkStroke ${
               checked ? "bg-primary border-primary" : ""
            }`}
            onClick={onClick}
         >
            <input type="checkbox" className="hidden" name={name} />
            <span
               className={`flex items-center justify-center ${
                  checked ? "" : "opacity-0 invisible"
               }`}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
               >
                  <path
                     fillRule="evenodd"
                     d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                     clipRule="evenodd"
                  />
               </svg>
            </span>
         </div>
         {children && (
            <label onClick={onClick} className="text-text2 dark:text-text3">
               {children}
            </label>
         )}
      </div>
   );
};

Checkbox.propTypes = {
   checked: PropTypes.bool,
   onClick: PropTypes.func.isRequired,
   name: PropTypes.string,
   children: PropTypes.node,
};

export default Checkbox;
