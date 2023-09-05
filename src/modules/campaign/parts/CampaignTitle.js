import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const CampaignTitle = ({ children, className = "mb-[5px] font-semibold" }) => {
   return <h3 className={classNames(" text-text1 ", className)}>{children}</h3>;
};

CampaignTitle.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
};

export default CampaignTitle;
