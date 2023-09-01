import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ className, children }) => {
   return (
      <div className={`flex flex-col gap-y-3 ${className}`}>{children}</div>
   );
};

FormGroup.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default FormGroup;
