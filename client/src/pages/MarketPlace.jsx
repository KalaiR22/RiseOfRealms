import React from 'react'
import { MarketOption } from '../constant'
import top from "../assets/images/top.png";
import bottom from "../assets/images/bottom.png";
import { FaLocationDot } from "react-icons/fa6";


const MarketPlace = () => {
  return (
    <div className="bg-black w-full h-screen p-10 px-16 overflow-y-scroll relative">
      <div className="pb-10">
        <h1 className="text-center text-white font-semibold text-2xl">
          Marketplace
        </h1>
        <button className="bg-[#8689EB] hover:bg-[#8689eb94] text-white font-medium text-base px-6 py-2 rounded-xl w-fit float-right cursor-pointer z-50 -mt-10 ">
          Inbox
        </button>
      </div>
      <button className="bg-[#FF0000] text-white font-medium text-xl px-3 py-3 rounded-full w-fit bottom-0 right-0 m-3 absolute cursor-pointer">
       <FaLocationDot/>
      </button>
      <img
        src={top}
        alt=""
        className="-top-10 left-0 absolute h-[40rem] w-[40rem] -z-0"
      />
      <img
        src={bottom}
        alt=""
        className="bottom-0 right-0 absolute h-[80rem] w-[80rem] -z-0 "
      />
      <div className="flex flex-wrap justify-between gap-3 z-50 ">
        {MarketOption.map((markets) => (
          <div
            key={markets.id}
            className="flex flex-col gap-5 p-3 bg-[#ffffff18] rounded-lg z-50 cursor-pointer"
          >
            <img
              src={markets.image}
              alt=""
              className="h-[200px] w-[300px] rounded-lg "
            />
            <div className="flex  justify-between px-2">
              <h1 className="text-[#ffffffaa] text-lg font-medium">
                {markets.name}
              </h1>
              <h1 className="text-[#ffffffaa] text-lg font-medium">
                {markets.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPlace
