"use client"
import React from "react"
import Apprentice from '@/components/Background/Apprentice';
import Timeline from '@/components/Background/Timeline';
import Hero from "@/components/Background/Hero/Hero";
import Computer from "@/components/Background/Hero/Computer";
import FamilyIntro from "@/components/Background/FamilyIntro";
import Advices from "@/components/Background/Carousel/Prompts";

const Background = () => {

    return (
        <div className="bg-black">
            <Hero />
            <FamilyIntro />
            <Advices />
            <Apprentice />
            
        </div>
    )


}

export default Background