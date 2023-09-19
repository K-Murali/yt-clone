import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Videolenght from "./Videolenght";
const SearchVideocard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex  flex-col md:flex-row  gap-1 items-start   md:mb-3">
        <div className="relative  h-48 md:h-44 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-screen md:w-full   object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <Videolenght time={video.lengthSeconds} />}
        </div>
        <div className="flex-row flex  text-white/[0.9] mt-1 md:mt-3">
          <div className="flex flex-col ml-3 overflow-hidden">
        
            <span className="text-xs  font-bold line-clamp-2">
              {video?.title}
            </span>
            <div className="flex items-start  mt-1 md:mt-2 text-white/[0.5] text-xs  ">
              <span>
                {` ${abbreviateNumber(video?.stats?.views, 0)}`} views{" "}
                <span className="text-white/[0.5] font-bold">.</span>{" "}
                {video?.publishedTimeText}
              </span>
            </div>
            <div className="flex items-start  text-white/[0.5] text-xs  ">
              <div className="flex items-start h-5 w-5 mt-1 md:mt-3 md:mb-3 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
              <span className=" gap-2  flex flex-row  ml-2 text-center items-center justify-center text-[12px] font-semibold mt-1 md:mt-3 text-white/[0.5]">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5]" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchVideocard;
