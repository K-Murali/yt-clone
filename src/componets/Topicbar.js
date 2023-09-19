import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../data/contextApi";
import "../index.css"
const Topicbar = () => {
  const navigate = useNavigate();

  const {
    topic,
    setselectcategories,
    selectcategories,
  
  } = useContext(Context);
  const clickHandel = (item) => {
    
    navigate("/");
    setselectcategories(item.name);
  };
  return (
    <div
      className={`  absolute py-3 top-[35px]  md:top-[38px]   z-10`}
    >
      <div 
 className="fixed z-10 overflow-x-scroll no-scrollbar    w-screen  py-3  bg-black ">

      <div className="flex gap-3 flex-row px-2">
        {topic.map((item, i = 0) => {
          return (
            <>
              <div   key={i++} className={`text-xs cursor-pointer  bg-white/[0.2] ${selectcategories===item.name?'bg-white text-black':''}  hover:bg-white hover:text-black rounded h-fit w-fit items-center px-2 py-1 mb-[1px] flex text-white`}>
                <span onClick={()=>{clickHandel(item)}} className="w-fit   whitespace-nowrap">{item.name}</span>
              </div>
            </>
          );
        })}
      </div>
        </div>
    </div>
  );
};

export default Topicbar;
