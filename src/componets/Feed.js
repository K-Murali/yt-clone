import React from "react";
import { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../data/contextApi";
import Videocard from "./Videocard";
import "../index.css"
import Topicbar from "./Topicbar";

const Feed = () => {
    const { loading, searchresults ,setloadval,loadval,mobilemenu} = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (

        <div className="flex flex-row h-[calc(100%-56px)]">
              <LeftNav/>
            <div  className={` md:mt-12 mt-16 grow w-[calc(100%-210px)] ${!mobilemenu?'md:ml-[210px]':'md:ml-0'} h-full  bg-black`}>
            <Topicbar/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 md:p-5">
                    {!loading &&searchresults&&
                        searchresults.map((item,i=0) => {  
                            return (item?.type==='video')&&(
                                <Videocard
                                    key={i++}
                                    video={item?.video}
                                    type={item?.type}
                                />
                            );
                        })}
                </div>
            
        </div>
         </div>

    );
};

export default Feed;