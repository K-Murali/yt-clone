import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchdata } from "../utils/api";
import { Context } from "../data/contextApi";
import SugVidecard from "./SugVidecard";
import LeftNav from "./LeftNav";

const VideoDetail = () => {
  const [video, setvideo] = useState();
  const [related, setrelated] = useState();
  const { id } = useParams();
  const { setloading, loading, loadval, setloadval } = useContext(Context);

  useEffect(() => {
    fetchvideodetail();
    fetchRelatedVideo();
  }, [id]);

  const fetchvideodetail = () => {
    setloading(true);
    setloadval(60);
    fetchdata(`video/details/?id=${id}`).then((res) => {
      setloadval(80);
      setloadval(100);
      console.log(res);
      setvideo(res);
      setloading(false);
    });
  };
  const fetchRelatedVideo = () => {
    setloading(true);
    fetchdata(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setrelated(res);
      setloading(false);
    });
  };
  const flag=true;
  if(window.innerWidth<='500px'){
    flag=false;
  }

  return (
    video &&
    !loading && (
      <div className="flex  flex-row md:flex-row items-center justify-center md:p-12  h-[calc(100%-60px)] bg-black">

        <div className="flex flex-col md:flex-row items-start gap-2   justify-center">
          <div className="flex mt-5 mx-0 flex-col justify-center items-left">            
         <LeftNav/>
            <div  className="w-screen md:w-[1000px] h-[200px] md:h-[550px]">
              <ReactPlayer
              playsinline
              pip
              stopOnUnmount={true}
                controls={true}
                playing={true}
                height="100%"
                width="100%"
                url={`https://www.youtube.com/watch?v=${video.videoId}`}
              />
            </div>
              <div className="flex">
                <span className="text-lg text-white font-bold mt-4 line-clamp-2">
                  {video?.title}
                </span>
              </div>

            <div className="flex justify-between  flex-row sm:flex-row mt-4">
              <div className="flex items-start">
                <img
                  className="h-11 w-11 rounded-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
                <div className="flex flex-col items-center ml-3">
                  <div className="text-white  text-sm  flex flex-col font-semibold ">
                    <span className=" gap-2 flex items-center text-[12px] font-semibold mt-2 text-white/[0.5]">
                      {video?.author?.title}
                      {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5]" />
                      )}
                    </span>
                    <div className="text-white/[0.5]  text-[12px]  ">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-white/[0.5]  ">
                <div className=" gap-2 flex flex-row items-center text-sm justify-center h-11 px-6 rounded-3xl bg:white/[0.5">
                  <span className="flex rounded-3xl p-1 text-sm bg-white/[0.1] flex-row">
                    &nbsp;
                    <AiOutlineLike className="text-lg text-white/[0.5] mr-2" />
                    {` ${abbreviateNumber(video?.stats?.likes, 0)}`}&nbsp;
                  </span>
                  <span className="flex rounded-3xl p-[0.35rem] text-sm  bg-white/[0.1] flex-row">
                    &nbsp;{`${abbreviateNumber(video?.stats?.views, 0)}`}
                    &nbsp;views&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col   gap-3 items-start justify-center py-6 px-2 erw overflow-y-hidden ">
            {related.contents.map((ele, i = 0) => {
              return ele.type==='video'&&(
                <div>
                  <SugVidecard
                    
                    key={i++}
                    video={ele?.video}
                    title={ele?.video?.title}
                    thumb={ele?.video?.thumbnails[0]?.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default VideoDetail;
