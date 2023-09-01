import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
   const { children, heading = "" } = props;
   return (
      <div className="relative w-full min-h-screen p-10 bg-lite isolate dark:bg-darkbg">
         <img
            src="/ellipse.png"
            alt="background"
            className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-[-1]"
         />
         <Link to="/" className="inline-block mb-5 lg:mb-16">
            <img srcSet="/logo.png 2x" alt="Logo" />
         </Link>
         <div className="w-full max-w-[556px] mx-auto px-5 py-8 lg:py-12 lg:px-16 bg-white rounded-lg dark:bg-darkSecondary">
            <h1 className="mb-2 text-lg font-semibold text-center lg:text-xl text-text1 lg:mb-3 dark:text-white">
               {heading}
            </h1>
            {children}
         </div>
      </div>
   );
};

LayoutAuthentication.propTypes = {
   heading: PropTypes.string,
   children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
   FallbackComponent: ErrorComponent,
});
