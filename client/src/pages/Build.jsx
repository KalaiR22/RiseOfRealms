import React from "react";
import {Buildoptions} from "../constant";
import { Link } from "react-router-dom";
import top from "../assets/images/top.png";
import bottom from "../assets/images/bottom.png";

const Build = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center p-20 relative overflow-y-scroll">
      <img
        src={top}
        alt=""
        className="-top-10 left-0 absolute h-[40rem] w-[40rem]"
      />
      <img
        src={bottom}
        alt=""
        className="bottom-0 right-0 absolute h-[80rem] w-[80rem] -z-0"
      />
      <button className="bg-[#8689EB] text-white font-semibold text-lg px-6 py-2 rounded-xl w-fit absolute top-6 left-16 ">
        <Link to="/">Exit</Link>
      </button>
      <div className="flex flex-wrap justify-between w-full items-center z-50 ">
        {Buildoptions.map((option) => (
          <div
            key={option.id}
            className="flex flex-col gap-6 border-[1px] border-[#f6f6f667] p-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Link to={option.link}>
              <img
                src={option.image}
                alt=""
                className="h-[22rem] w-[25rem] rounded-lg"
              />
              <h1 className="text-white text-center text-2xl font-semibold py-2">
                {option.head}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Build;
