import React from "react";
import { icons } from "react-icons";

const LeftNavMenuItem = ({ text, icons, className, action }) => {

  
  return (
   
    <div
      onClick={action}
      className={
        `text-sm cursor-pointer hover:bg-white/[0.3] rounded h-10 items-center px-3 mb-[1px] flex text-white` +
        className
      }
      >
      <span className="text-sm text-white mr-5">{icons}</span>
      {text}
    </div>
    
  );
};

export default LeftNavMenuItem;
