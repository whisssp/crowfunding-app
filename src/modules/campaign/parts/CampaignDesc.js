import React from "react";
import classNames from "utils/classNames";
import PropTypes from "prop-types";

const CampaignDesc = ({ className = "text-xs mb-[15px]", children }) => {
   return <p className={classNames("text-text3", className)}>{children}</p>;
};

CampaignDesc.propTypes = {
   classNames: PropTypes.string,
   children: PropTypes.node,
};

export default CampaignDesc;
