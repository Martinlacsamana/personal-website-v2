"use client"
import React, { useEffect } from "react"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('scrollreveal').then((ScrollReveal) => {
                ScrollReveal.default().reveal('.project-card', { 
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
        <div id="projects" className="scroll-mt-20 pb-20">
            <div className="relative text-center pt-6 pb-24">
                <h1 className="text-4xl font-bold text-white opacity-80 tracking-wide">PROJECTS</h1>
                <p className="text-xl text-white opacity-80 mt-4">
                From <span className="text-yellow-400">passion projects</span> to quick builds.
                </p>
            </div>


            <div className="flex gap-16">

                <div className="project-card">
                    <ProjectCard 
                        hook="Project Guardian"
                        position="NextJS, Django, FireStore"
                        children={
                            <div className="space-y-6 text-xs">
                                <p>
                                Growing up family-oriented, I always dreamed of creating a personal guardian application. It stores and processes hundreds of journal entries, categorizing them with features like tags and sentiment scores. The goal is to eventually train an AI model on these experiences, creating a lasting resource for guidance, wisdom, and support—accessible to both me and my future children, transcending the limitations of time and mortality.
                                </p>
                            </div>
                        }
                        image="/ProjectGuardian2.png"
                        links={[
                            { label: "Front-End", url: "https://github.com/Martinlacsamana/project-guardian-frontend" },
                            { label: "Back-End", url: "https://github.com/Martinlacsamana/project-guardian-backend" }
                        ]}
                    />
                </div>

                <div className="project-card">
                    <ProjectCard 
                        hook="Patent Analyzer"
                        position="NextJS / TypeScript"
                        children={
                            <div className="space-y-6 text-xs">
                                <p>
                                Presenting P.AI, an AI-driven patent analysis platform tailored for medical professionals. Designed to accelerate discovery and innovation, P.AI empowers researchers, patent legal professionals, and inventors to swiftly access patent insights and interact with patent documents—overcoming the complexities and technical challenges that often hinder efficiency.
                                </p>
                            </div>
                        }
                        image="/PAI.png"
                        links={[
                            { label: "Github", url: "https://github.com/Martinlacsamana/patent-analyzer" },
                            { label: "Demo", url: "https://www.youtube.com/watch?v=6zexBGYYj_w"}
                        ]}
                    />
                </div>

            </div>




        </div>
    )

}

export default Projects