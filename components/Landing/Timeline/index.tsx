"use client"
import React, { useEffect } from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('scrollreveal').then((ScrollReveal) => {
                ScrollReveal.default().reveal('.timeline-item', { 
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
        <div className="flex justify-center">
            <div className="min-h-screen">
                <h1 className="text-2xl text-center tracking-tighter text-gray-800 md:text-4xl md:looser pb-2">My Journey Through Time</h1>
                <h1 className="text-md text-center tracking-tighter text-gray-500 md:text-xl md:looser pb-12">Transforming observations into reality.</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <TimelineItem
                        year="2017 - 2018"
                        title="Promoted Climate Awareness"
                        description="to a following of over 10K through a brand aimed at spreading awareness on the harmful effects of CO2 emissions in the atmosphere."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/TumalonDownload.jpeg"
                    />
                    <TimelineItem
                        year="2019"
                        title="Presented to Senior Executives"
                        description="that included the Chief Revenue Officer and VPs at Ceros, sharing insights on the customer life cycle from my internship experience."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Ceros.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Delivered a Speech to 1500+ People"
                        description="about redefining normalcy during the pandemic as Class President, emphasizing the importance of staying connected as students and friends."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/ClearviewLogo.png"
                    />

                    <TimelineItem
                        year="Nov 2021 - Dec 2021"
                        title="Helped Raise 2,000,000+ USD"
                        description="to support underserved children nationwide as a community lead for Shaquille O' Neal's NFT drop."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/ShaqGivesBack.avif"
                    />

                    <TimelineItem
                        year="Nov 2021 - Mar 2022"
                        title="Donated 80,000+ Meals"
                        description="to those in need worldwide as a Partnership & Development lead at a Web3 Company - Superlative Secret Society, while also boosting secondary sales to 9 MILLION USD."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/SuperlativeSS.jpeg"
                    />
                    
                    <TimelineItem
                        year="Jan 2023 - May 2023"
                        title="Mentored 50+ CS Students"
                        description="as an Academic Intern for CS61B at UC Berkeley, delivering a mini-lecture on HashMaps during my final week. "
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/BerkeleyEECS.jpg"
                    />
                    <TimelineItem
                        year="May 2023 - February 2024"
                        title="Developed a Startup from the Ground Up"
                        description="with a modern tech stack, handling database schemas, endpoints, and authentication integration while undergoing rapid iteration with user testing, throwing myself into the deep end and absorbing everything I could."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/footer+copy.png"
                    />

                    <TimelineItem
                        year="May 2023 - February 2024"
                        title="Pursued AWS Developer Certification in 10 Days"
                        description="driven by my lack of understanding about the cloud and my desire to continuously learn. I challenged myself to become AWS Certified developer within a time limit that inherently strengthened my system design principles."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/aws_logo_smile_1200x630.png"
                    />          
                    <TimelineItem
                        year="Jun 2024 - Aug 2024"
                        title="Course Corrected Job Seekers"
                        description="from application to offer with personalized insights at each step of the way at Elavize, handling AI integrations and a job-tracking kanban."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/footer+copy.png"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Timeline;