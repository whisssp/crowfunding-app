import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = (props) => {
   const {
      control,
      placeholder,
      name,
      type = "text",
      error = "",
      children,
   } = props;
   const { field } = useController({
      control,
      name,
      defaultValue: "",
   });
   return (
      <div className="relative">
         <input
            type={type}
            className={`w-full px-6 py-4 text-sm font-medium border rounded-xl bg-transparent dark:placeholder:text-text-2 dark:text-white  placeholder:text-text4 ${
               error?.length > 0
                  ? "border-error text-error"
                  : "border-strock dark:border-darkStroke text-text1"
            } ${children ? "pr-12" : ""}`}
            placeholder={error?.length <= 0 ? placeholder : ""}
            {...field}
         />
         {error?.length > 0 && (
            <span className="absolute bg-white pointer-events-none dark:bg-darkSecondary top-2/4 -translate-y-2/4 text-error left-6 right-6 error-input">
               {error}
            </span>
         )}
         {error?.length <= 0 && (
            <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4 dark:text-text2">
               {children}
            </span>
         )}
      </div>
   );
};

Input.propTypes = {
   control: PropTypes.any.isRequired,
   placeholder: PropTypes.string,
   name: PropTypes.string,
   type: PropTypes.string,
   error: PropTypes.string,
   children: PropTypes.any,
};

export default withErrorBoundary(Input, {
   FallbackComponent: <ErrorComponent></ErrorComponent>,
});
