import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Videolenght from "./Videolenght";
const Videocard = ({ video }) => {

   const navigate=useNavigate();
  const [isMouseEntered, setIsMouseEntered] = useState(false);

   setInterval(() => {
    
   }, 1000);
  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-2 md:mb-8">
      <div
      className="relative h-48 md:h-44 md:rounded-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`h-full w-screen ${isMouseEntered ? 'hidden' : 'flex'} md:w-full object-cover`}
        src={video?.thumbnails[0]?.url}
        alt="Thumbnail"
      />
      {isMouseEntered && (
        <ReactPlayer
          className=" cursor-pointer"
          controls={false}
          onPause={()=>{navigate(`/video/${video?.videoId}`),handleMouseLeave}}
          playing={true}
          height="100%"
          width="100%"
          url={`https://www.youtube.com/watch?v=${video.videoId}`}
        />
  
      )}
      {video?.lengthSeconds && <Videolenght time={video.lengthSeconds} />}
    </div>
        <div className="flex-row flex text-white mt-3">
          <div className="flex  items-start h-9 w-9  rounded-full overflow-hidden">
            <img
              className="h-full  sm:w-screen md:w-full object-cover"
              src={video?.author?.avatar[0]?.url}
            />
          </div>
        
          <div className="flex flex-col  ml-3 overflow-hidden">
            <span className="text-xs font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className=" gap-1 flex items-center text-[12px] font-semibold mt-1  text-white/[0.5]">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5]" />
              )}
              {/* {`${(window.innerWidth<'500px')?abbreviateNumber(video?.stats?.views,0)+'views <span className="text-white/[0.5] font-bold">.</span> {video?.publishedTimeText}:""':""}`}  */}
            </span>
            <div className="md:flex md:items-start text-white/[0.5] text-xs  ">
              <span>
                {` ${abbreviateNumber(video?.stats?.views, 0)}`} views{" "}
                <span className="text-white/[0.5] font-bold">.</span>{" "}
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videocard;
