"use client"
import React from 'react'
import Hero from "@/components/Landing/Hero";
import CodeGraphic from "@/components/Landing/CodeGraphic";
import ShortBackground from '@/components/Landing/ShortBackground';
import Timeline from '@/components/Landing/Timeline';

export default function Home() {


  return (
    
    <div className="flex flex-col justify-center items-center space-y-12 pb-32">
        <Hero/>
        <CodeGraphic/>
        <ShortBackground/>
        <Timeline/>
        
    </div>
  );
}
