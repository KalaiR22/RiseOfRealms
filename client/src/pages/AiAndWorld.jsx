import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import top from "../assets/images/top.png";
import bottom from "../assets/images/bottom.png";
import AI from "../assets/images/AI.jpg";
import World from "../assets/images/World.jpg";

const AiAndWorld = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handlePlayClick = () => {
    if (selectedOption === "AI") {
      navigate("/ai-game"); // Replace with the desired route for AI game
    } else if (selectedOption === "World") {
      navigate("/world-game"); // Replace with the desired route for World game
    }
  };

  return (
    <div className="bg-black w-full h-screen p-10 px-16 overflow-y-scroll relative flex flex-col items-center">
      <img
        src={top}
        alt=""
        className="-top-10 left-0 absolute h-[60rem] w-[60rem] -z-0"
      />
      <img
        src={bottom}
        alt=""
        className="bottom-0 right-0 absolute h-[80rem] w-[80rem] -z-0 "
      />
      <div className="flex justify-between w-full px-32 py-2">
        <div
          className={`flex flex-col items-center bg-[#ffffff0b] rounded-lg z-50 cursor-pointer p-3 border-[1px] border-[#f6f6f667] hover:border-[2px] ${
            selectedOption === "AI" ? "border-[#8689EB]" : ""
          }`}
          onClick={() => setSelectedOption("AI")}
        >
          <img src={AI} alt="" className="h-[25rem] w-[30rem] rounded-lg" />
          <h1 className="text-[#ffffffaa] text-3xl font-semibold pt-5 ">AI</h1>
        </div>
        <div
          className={`flex flex-col items-center bg-[#ffffff0b] rounded-lg z-50 cursor-pointer p-3 border-[1px] border-[#f6f6f667] hover:border-[2px] ${
            selectedOption === "World" ? "border-[#8689EB]" : ""
          }`}
          onClick={() => setSelectedOption("World")}
        >
          <img src={World} alt="" className="h-[25rem] w-[30rem] rounded-lg" />
          <h1 className="text-[#ffffffaa] text-3xl font-semibold pt-5 ">
            WORLD
          </h1>
        </div>
      </div>

      <button
        onClick={handlePlayClick}
        className={`bg-[#8689EB] hover:bg-[#8689eb94] text-white font-medium text-base px-6 py-2 rounded-xl w-fit cursor-pointer z-50 mx-auto mt-11 ${
          !selectedOption ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!selectedOption} // Disable button if no option is selected
      >
        Play
      </button>
    </div>
  );
};

export default AiAndWorld;
