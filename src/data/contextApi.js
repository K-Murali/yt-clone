import React, { createContext, useState, useEffect } from "react";
import {fetchdata} from '../utils/api' 
import { topics } from "../utils/topics";

export const Context = createContext();

export const AppDataProvider = (props) => {
  const [loading, setloading] = useState(false);
  const [selectcategories, setselectcategories] = useState(false);
  const [searchresults, setsearchresults] = useState(false);
  const [mobilemenu, setmobilemenu] = useState(false);
  const [loadval, setloadval] = useState(0);
  const [topic, settopic] = useState(topics);

  useEffect(() => {
    console.log("render")
    fetch_category_data(selectcategories);
  }, [selectcategories]);

  const fetch_category_data = (query) => {
  
    setloading(true);
    setloadval(10)
    fetchdata(`search/?q=${query}`).then(({contents}) => {
      setloadval(50)
      console.log(contents);
      setsearchresults(contents);
      setloadval(100);
      setloading(false)
    
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setloading,
        topic, settopic,
        selectcategories,
        setselectcategories,
        searchresults,
        setsearchresults,
        mobilemenu,
        setmobilemenu,
        loadval,
        setloadval,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
