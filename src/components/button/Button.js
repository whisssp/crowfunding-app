import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({
   type = "button",
   className = "",
   isLoading = false,
   children,
}) => {
   let child = !!isLoading ? (
      <div className="w-5 h-5 mx-auto transition-all border-4 border-white rounded-full animate-spin border-t-transparent"></div>
   ) : (
      children
   );
   if (isLoading);
   return (
      <button
         className={classNames(
            "inline-block py-4 text-center rounded-xl font-semibold min-h-[56px]",
            className,
            !!isLoading ? "opacity-50 pointer-events-none" : ""
         )}
         type={type}
      >
         {child}
      </button>
   );
};

Button.propTypes = {
   type: PropTypes.string.isRequired,
   className: PropTypes.string,
   children: PropTypes.node,
   isLoading: PropTypes.bool,
};

export default Button;
