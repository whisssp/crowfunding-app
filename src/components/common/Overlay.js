import React from "react";
import classNames from "utils/classNames";

const Overlay = ({ show = false }) => {
   return (
      <div
         className={classNames(
            "fixed inset-0 z-40 bg-black ",
            show ? "bg-opacity-20 visible" : "bg-opacity-0 invisible"
         )}
      ></div>
   );
};

export default Overlay;
