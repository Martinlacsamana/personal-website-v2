import React from "react";
import Carousel from "./Carousel";
import Graphic from "./Graphic";


const GradientSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center  ">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[1845px] h-[1000px] top-[0px] left-[-500px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(92,195,250,0.28)_0%,rgba(92,195,250,0)_100%)] opacity-80" />
        <div className="absolute w-[1845px] h-[1000px] top-[100px] left-[800px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(250,117,248,0.28)_0%,rgba(250,117,248,0)_100%)] opacity-70" />
        <div className="absolute w-[1845px] h-[1200px] top-[-300px] left-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(158,110,230,0.28)_0%,rgba(158,110,230,0)_100%)] opacity-80" />
      </div>
      
      <div className="space-y-24 -mt-4 pb-16">
        <Carousel/>
        {/* <SecondCarousel/> */}

      </div>

      <Graphic/>

     
      
      <div id="experiences" className="relative text-center pt-12 scroll-mt-20">
          <h1 className="text-4xl font-bold text-white opacity-80 tracking-wide">WORK EXPERIENCE</h1>
          <p className="text-xl text-white opacity-80 mt-4">
            Striving to make <span className="text-yellow-400">impactful</span> tech.
          </p>
      </div>
      
    </div>
  );
};

export default GradientSection;