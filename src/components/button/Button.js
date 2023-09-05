import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
   type = "button",
   className = "",
   isLoading = false,
   children,
   ...rest
}) => {
   let child = !!isLoading ? (
      <div className="w-5 h-5 mx-auto transition-all border-4 border-white rounded-full animate-spin border-t-transparent"></div>
   ) : (
      children
   );
   let defaultClassName =
      "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
   switch (rest.kind) {
      case "primary":
         defaultClassName = defaultClassName + " bg-primary text-white";
         break;
      case "secondary":
         defaultClassName = defaultClassName + " bg-secondary text-white";
         break;
      case "ghost-secondary":
         defaultClassName =
            defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
         break;

      default:
         break;
   }
   if (rest.href)
      return (
         <Link
            to={rest.href}
            className={classNames(defaultClassName, className)}
         >
            {child}
         </Link>
      );
   return (
      <button
         className={classNames(
            defaultClassName,
            !!isLoading ? "opacity-50 pointer-events-none" : "",
            className
         )}
         type={type}
         {...rest}
      >
         {child}
      </button>
   );
};

Button.propTypes = {
   type: PropTypes.string,
   className: PropTypes.string,
   children: PropTypes.node,
   isLoading: PropTypes.bool,
   href: PropTypes.string,
   kind: PropTypes.oneOf(["primary", "secondary", "ghost-secondary"]),
};

export default Button;
