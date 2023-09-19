import React from "react";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';


const LeftNavMenuItem = ({ text, icons, highlight, action }) => {

 
  const [flag, setflag] = useState(false);
 
  return (
   
    <div
      onClick={()=>{action()}}
      className={
        `text-sm cursor-pointer hover:bg-white/[0.3] rounded h-10 items-center px-3 mb-[1px] flex text-white ${(flag)?'bg-white/[0.2] text-white':''}`  
      }
      >
      <span className="text-sm text-white mr-5">{icons}</span>
      {text}
    </div>
    
  );
};

export default LeftNavMenuItem;
