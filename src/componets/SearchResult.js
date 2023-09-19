import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../data/contextApi';
import { fetchdata } from '../utils/api';
import LeftNav from './LeftNav';
import SearchVideocard from './SearchVideocard';

const SearchResult = () => {
  const [search, setsearch] = useState([]);
  const { searchQuery } = useParams();
  const { setloading,loading,mobilemenu ,setloadval} = useContext(Context);

  useEffect(() => {
    fetchsearch();
  }, [searchQuery]);


  const fetchsearch = () => {
    setloading(true);
    setloadval(20)
    fetchdata(`search/?q=${searchQuery}`)
    .then((res) => {
      console.log("search")
        setloadval(60)
        setloadval(100)
        setsearch(res?.contents);
        setloading(false);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setloading(false);
      });
  };


  return (
    <div className="flex   flex-row h-[calc(100%-56px)]">
        <LeftNav/>
        <div  className={` flex  items-center justify-center  grow  w-[calc(75%)]   ${!mobilemenu?'md:ml-[210px]':'md:ml-0'} h-full  bg-black`}>
            <div className=" grid grid-cols-1   gap-2 mt-4 md:p-5">
                {!loading &&search&&
                    search.map((item,i=0) => {  
                        return (item.type==='video')&&(
                          <div className=''>
                            <SearchVideocard
                            key={item?.video?.videoId}
                            video={item?.video}
                            />
                            </div>
                        );
                    })}
            </div>
        </div>
    </div>
);
    }

export default SearchResult
