import React from "react";
import { useContext, useState } from "react";
import { Context } from "../data/contextApi";
import LoadingBar from "react-top-loading-bar";

const Loader = () => {
    const {loadval,setloadval} = useContext(Context);
    return (
        <LoadingBar
        color='#f11946'
        progress={loadval}
        onLoaderFinished={() => setloadval(0)}
        />
        );
};

export default Loader;