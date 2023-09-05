import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
   return (
      <button
         onClick={onClick}
         className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl dark:border-darkStroke "
      >
         <img srcSet="/icon-google.png 2x" alt="Google Icon" />
         <span className="dark:text-white">{text}</span>
      </button>
   );
};
ButtonGoogle.propTypes = {
   text: PropTypes.string,
   onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
   FallbackComponent: ErrorComponent,
});
