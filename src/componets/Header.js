import React from "react";
import { useContext, useState } from "react";
import { Context } from "../data/contextApi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import logo from "../assets/yt-logo.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";


const Header = () => {

  const [searchQuery, setsearchQuery] = useState("");

  const { topic,settopic,  mobilemenu, setmobilemenu } = useContext(Context);

  const navigate = useNavigate();

  let obj = {
    "name": "New"
  };
  

  const searchQueryHandel = (event) => {
    obj.name=searchQuery;
    if (
      event?.key === "Enter" ||
      (event === "searchButton" && searchQuery?.length > 0)
    ) {
      navigate(`/searchResults/${searchQuery}`);
      settopic(topic.concat(obj))
    }
  };
  

  const mobilemenuToggle = () => {
    setmobilemenu(!mobilemenu);
  };
  
  return (
    <>
      {<Loader/>}
        <>
          
        
          <div className=" sticky top-0 z-10 flex flex-row items-center justify-between h-fit px-4   bg-black">
            <div className="flex  flex-row gap-4">
              <div className="flex cursor-pointer   hover:bg-white/[0.25] rounded-full">


            <div >
              {mobilemenu ? (
                
                <SlMenu onClick={mobilemenuToggle} className="text-white m-2" />
                
                ) : (
                  <SlMenu onClick={mobilemenuToggle} className="text-white m-2" />
                  )}
                  </div>
                  </div>
               <div className="flex text-center items-center justify-center">
              <Link to="/">
                <img className="h-4 w-15 flex text-center" src={logo} alt="Youtube" />
              </Link>
                </div>   
            </div>
            <div className="group flex md:flex mb-2 mt-3 items-center">
              <div className="flex h-7 md:h-8  md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <div className="w-10  items-center justify-center hidden group-focus-within:md:flex">
                  <IoIosSearch className="text-white text-xl" />
                </div>
                <input
                  type="text"
                  className="bg-transparent  outline-none text-white pr-5 pl-5 md:pl-0 w-28  md:group-focus-within:pl-0 md:w-64 lg:w-[446px]"
                  onChange={(e) =>{ setsearchQuery(e.target.value) }}
                  onKeyUp={searchQueryHandel}
                  placeholder="Search"
                  value={searchQuery}
                />
              </div>
              <button
                className="w-[40px] md:w-[60px] h-7 md:h-8 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                onClick={() => searchQueryHandel("searchButton")}
              >
                <IoIosSearch className="text-white text-xl" />
              </button>
            </div>

            <div className="flex items-center">
              <div className="hidden md:flex">
                <div className="flex items-center justify-center  hover:bg-slate-900 h-10 w-10 rounded-full">
                <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                </div>

                <div className="flex items-center justify-center h-10   hover:bg-slate-900 w-10 rounded-full">

                <FiBell className="text-white text-xl cursor-pointer" />
                </div>
              </div>
              <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
                </div>
            </div>

            
          </div>
        
        </>
      
    </>
  );
};
export default Header;
