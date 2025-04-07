"use client"
import React from "react"
import {useEffect} from 'react'
import Hero from "@/components/Background/Hero/Hero"
import PersonalityIntro from "@/components/Background/PersonalityIntro"
import LeadingWithLove from "@/components/Background/LeadingWithLove"
import MyRoots from "@/components/Background/MyRoots"
import ChildhoodPhoto from "@/components/Background/ChildhoodPhoto"

const Background = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('scrollreveal').then((ScrollReveal) => {
                ScrollReveal.default().reveal('.background-section', { 
                    delay: 300,
                    distance: '50px',
                    origin: 'bottom',
                    reset: false,
                    easing: 'ease-in-out',
                    interval: 200
                });
            });
        }
    }, []);

    return (
        <div className="bg-black">
            <Hero />
            <PersonalityIntro />
            <LeadingWithLove />
            <MyRoots />
            <ChildhoodPhoto />
        </div>
    )
}

export default Background
