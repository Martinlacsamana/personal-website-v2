import React from "react";

const DominoesHeader = () => {
  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center space-y-4 py-8">
      <p className="w-2/3 pb-4 text-center text-5xl font-normal tracking-[-1.20px] leading-[51.4px] bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent">
        My ambition stems from my willingness to topple dominoes.
      </p>
      <div className="flex items-center justify-center py-8 px-20 w-full">
        <img src='/DominoEffect2.png' className="w-1/2 h-auto object-cover rounded-lg shadow border border-gray0299"/>

        <div className="w-1/2 flex justify-center items-center">
            <p className="w-2/3 text-left text-md font-normal text-gray-500 leading-7">
                <span className="font-normal text-[#7e7e87cc]">
                not literal dominoes, but rather a{" "}
                </span>
                <span className="font-bold text-gray-500">
                metaphor for exponential growth through consistent effort
                </span>
                <span className="font-normal text-[#7e7e87cc]">
                . Starting with a domino that topples another 1.5x its size, this principle shows
                how small, steady actions can escalate to monumental achievements, reaching heights like Mt. Everest in just
                31 dominoes.
                </span>
            </p>

        </div>
       

        

      </div>
      
    </div>
  );
};

export default DominoesHeader;