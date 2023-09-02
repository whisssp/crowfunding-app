import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const FormGroup = ({ className, children }) => {
   return (
      <div className={classNames("flex flex-col gap-y-3", className)}>
         {children}
      </div>
   );
};

FormGroup.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default FormGroup;
