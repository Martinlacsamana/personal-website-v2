import React from "react"

import ExperienceCard from "../Experiences/ExperienceCard"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <div id="projects" className="scroll-mt-20 pb-48">
            <div className="relative  text-center pt-6  pb-24">
                <h1 className="text-4xl font-bold text-white opacity-80 tracking-wide">PROJECTS</h1>
                <p className="text-xl text-white opacity-80 mt-4">
                From <span className="text-yellow-400">passion projects</span> to code-alongs.
                </p>
            </div>


            <div className="flex gap-16">

                <ProjectCard 
                    hook="Project Guardian"
                    position="NextJS, TypeScript,  "
                    children={
                        <div className="space-y-6 text-xs">
                            <p>
                                We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.
                            </p>
                        </div>
                    }
                    image="/MVHQ.png"
                    links={[
                        { label: "Front-End", url: "https://github.com/Martinlacsamana/project-guardian-frontend" },
                        
                        { label: "Back-End", url: "https://github.com/Martinlacsamana/project-guardian-backend" }
                    ]}

                />
                <ProjectCard 
                    hook="Patent Analyzer"
                    position="NextJS, TypeScript,  "
                    children={
                        <div className="space-y-6 text-xs">
                            <p>
                                We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.
                            </p>
                        </div>
                    }
                
                    image="/MVHQ.png"
                    links={[
                        { label: "Github", url: "https://github.com/Martinlacsamana/patent-analyzer" },
                        { label: "Demo", url: "https://www.youtube.com/watch?v=6zexBGYYj_w"}
                    ]}
                />

            </div>




        </div>
    )

}

export default Projects