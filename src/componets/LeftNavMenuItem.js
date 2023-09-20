import React from "react";

const LeftNavMenuItem = ({ text, icons, action }) => {
  return (
    <div
      onClick={() => {
        action();
      }}
      className={`text-sm cursor-pointer hover:bg-white/[0.3] rounded h-10 items-center px-3 mb-[1px] flex text-white `}
    >
      <span className="text-sm text-white mr-5">{icons}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
