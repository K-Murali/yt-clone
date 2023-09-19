import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const SugVidecard = ({ thumb, title ,video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
    
    <div className="flex flex-row ml-3 gap-3 overflow-hidden">
      <img className="w-44 h-24 rounded-xl" src={thumb} />
    <div className="flex flex-col">

      <span className="text-xs font-bold text-white line-clamp-2">{title}</span>
   

      <span className=" gap-2 flex items-center text-[12px] font-semibold mt-2 text-white/[0.5]">
        {video?.author?.title}
        {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
          <BsFillCheckCircleFill className="text-white/[0.5]" />
          )}
      </span>
          
      <div className="flex items-start text-white/[0.5] text-xs  ">
        <span>
          {` ${abbreviateNumber(video?.stats?.views, 0)}`} views{" "}
          <span className="text-white/[0.5] font-bold">.</span>{" "}
          {video?.publishedTimeText}
        </span>
          </div>
      </div>
    </div>
    </Link>
  );
};

export default SugVidecard;
