import moment from "moment";
import React from "react";

const Videolenght = ({time}) => {
  var Videolenghtinseconds=null; 
  if(time>=3600){
   Videolenghtinseconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
    }
    else{
       Videolenghtinseconds = moment()
      .startOf("day")
      .seconds(time)
      .format("mm:ss");
    }
  return <div className="absolute rounded bottom-2 right-2  text-xs text-white bg-black" >

{Videolenghtinseconds}
  </div>;
};

export default Videolenght;
