import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((store) => store.user.userdetails.name);
  return (
    <div>
      {value ? (
        <div className="fixed top-0 bg-white z-10 w-full shadow-lg flex items-center p-2">
          <h1 className="text-center font-bold text-xl md:text-3xl  tracking-wider lg:tracking-[0.7rem] first-letter:text-red-600 first-letter:text-2xl md:first-letter:text-5xl w-[80%]">
            SOCIALSNAP
          </h1>
          <h1>Hi {value}</h1>
        </div>
      ) : (
        <div className="fixed top-0 bg-white z-10 w-full shadow-lg p-2">
          <h1 className="w-[20%] mx-auto font-bold text-xl md:text-3xl  tracking-wider lg:tracking-[0.7rem] first-letter:text-red-600 first-letter:text-2xl md:first-letter:text-5xl">
            SOCIALSNAP
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
