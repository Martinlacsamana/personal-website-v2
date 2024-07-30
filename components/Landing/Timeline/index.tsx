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
        <div className="flex justify-center" style={{background: 'white'}}>
            <div className="min-h-screen">
                <h1 className="text-2xl text-center tracking-tighter text-gray-800 md:text-4xl md:looser pb-2">My Journey Through Time</h1>
                <h1 className="text-md text-center tracking-tighter text-gray-500 md:text-xl md:looser pb-12">Transforming observations into reality.</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <TimelineItem
                        year="2020"
                        title="Tumalon"
                        description="A brand to spread awareness on the harmful effects of CO2 emissions in the atmosphere. Did XYZ in order to."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/TumalonDownload.jpeg"
                    />
                    <TimelineItem
                        year="2021"
                        title="Ceros"
                        description="Captured cross-functional workflows by shadowing a Senior Solutions Engineer while we met with key internal stakeholders during Ceros' typical daily customer life cycle journey and Software Development Life Cycle."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Ceros.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Graduation and accepted into UC Berkeley"
                        description="Got into Berkeley which I was extremely excited for. This was my dream for a multitude of reasons. For many years..."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Berkdownload.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Superlative Secret Society"
                        description="Implemented workflows and streamlined communications between marketing, development, and customer success teams, resulting in secondary sales of 9 MILLION USD."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/SuperlativeSS.jpeg"
                    />
                    <TimelineItem
                        year="2021"
                        title="Shaq Gives Back"
                        description="Facilitated communication between our clients, customer success teams, and tech leads to help raise over 2 MILLION USD to provide tens of thousands of toys, clothing, and meals to underprivileged youth nationwide."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/ShaqGivesBack.avif"
                    />
                    <TimelineItem
                        year="2023"
                        title="Academic Intern"
                        description="Covered a series of data structures, including but not limited to lists, graphs, stacks, queues, HashMaps, and graphs, along with runtime and space complexities, sorting algorithms, and abstract data types using Java language."
                        position="start"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/EECSBerkeley.png"
                    />
                    <TimelineItem
                        year="Current"
                        title="Elavize"
                        description="Led the development of four key modules alongside their REST APIs using the MERN stack: the user profile, user discovery, career search, and results page. Designed complex search features for seamless user experience, enabling precise user and career discovery through optimized data fetches and introducing AI-driven insights for non-existing career data in the database."
                        position="end"
                        svg="https://personal-website-company-images.s3.us-west-1.amazonaws.com/footer+copy.png"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Timeline;