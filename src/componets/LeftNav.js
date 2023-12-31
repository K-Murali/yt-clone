import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../data/contextApi";

const LeftNav = () => {
  const navigate = useNavigate();

  const { setselectcategories, mobilemenu } = useContext(Context);

  const clickHandel = (name, type) => {
    switch (type) {
      case "category":
        navigate(`/${name}`);
        return setselectcategories(name);
      case "home":
        navigate("/yt-clone");
        return setselectcategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={` w-[210px] overflow-y-auto  h-full ${
        mobilemenu ? "hidden" : "block"
      }   bg-black   fixed z-10`}
    >
      <div className="flex flex-col px-3">
        {categories.map((item, i = 1) => {
          return (
            <>
              <LeftNavMenuItem
                key={i++}
                text={item.type === "home" ? "Home" : item.name}
                icons={item.icon}
                action={() => {
                  clickHandel(item.name, item.type);
                }}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
