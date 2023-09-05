import React from "react";
import classNames from "utils/classNames";
import PropTypes from "prop-types";

const Heading = ({ children, className = "", number }) => {
   return (
      <h2
         className={classNames(
            "text-lg font-semibold text-text1 mb-5",
            className
         )}
      >
         {children}{" "}
         {number && <span className="text-secondary">{`(${number})`}</span>}
      </h2>
   );
};

Heading.propTypes = {
   children: PropTypes.any,
   className: PropTypes.string,
   number: PropTypes.number,
};

export default Heading;
