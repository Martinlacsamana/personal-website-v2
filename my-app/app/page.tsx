import React from 'react'
import Hero from "@/components/Landing/Hero";
import CodeGraphic from "@/components/Landing/CodeGraphic";
import Dominoes from "@/components/Landing/Dominoes";
import ShortBackground from '@/components/Landing/ShortBackground';
import DominoesHeader from '@/components/Landing/DominoesHeader';
import Resume
 from '@/components/Landing/Resume';
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
        <Hero/>
        <CodeGraphic/>
        <ShortBackground/>
        <Resume/>
        
    </div>
  );
}
