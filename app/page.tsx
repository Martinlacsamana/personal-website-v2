"use client"
import React from 'react'
import Hero from "@/components/Landing/Hero";
import CodeGraphic from "@/components/Landing/CodeGraphic";
import GradientSection from '@/components/Landing/SecondGradient';
import Experiences from '@/components/Landing/Experiences/Experiences';
import Projects from '@/components/Landing/Projects/Projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-black">
      <div className="relative w-full overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[1845px] h-[1200px] top-[200px] left-[-300px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(92,195,250,0.28)_0%,rgba(92,195,250,0)_100%)] opacity-80" />
          <div className="absolute w-[1845px] h-[1200px] top-[300px] left-[1000px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(250,117,248,0.28)_0%,rgba(250,117,248,0)_100%)] opacity-70" />
          <div className="absolute w-[1845px] h-[1200px] top-[-200px] left-[500px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(158,110,230,0.28)_0%,rgba(158,110,230,0)_100%)] opacity-80" />
        </div>
        
        {/* Hero and CodeGraphic components */}
        <div className="flex flex-col items-center relative z-10">
          <Hero />
          <CodeGraphic />
        </div>
      </div>


      <GradientSection />

      <Experiences />

      <Projects/>

      
      {/* We will move this into a different page */}
      {/* <ShortBackground />
      <Timeline /> */}
    </div>
  );
}