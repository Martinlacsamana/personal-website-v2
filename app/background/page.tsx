"use client"
import React from "react"
import Hero from "@/components/Background/Hero/Hero"
import PersonalityIntro from "@/components/Background/PersonalityIntro"
import LeadingWithLove from "@/components/Background/LeadingWithLove"
import MyRoots from "@/components/Background/MyRoots"
import Purpose from "@/components/Background/Purpose"
import ChildhoodPhoto from "@/components/Background/ChildhoodPhoto"

const Background = () => {
    return (
        <div className="bg-black">
            <Hero />
            <PersonalityIntro />
            <LeadingWithLove />
            <MyRoots />
            <Purpose />
            <ChildhoodPhoto />
        </div>
    )
}

export default Background
