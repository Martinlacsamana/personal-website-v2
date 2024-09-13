import React from "react"
import ExperienceCard from "./ExperienceCard"

const Experiences = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12 pb-24 space-y-36">
            <ExperienceCard 
                hook="Backend Software Engineer"
                position="Metaverse HQ"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                        Building backend systems for the #1 Rewards Platform in the Metaverse, working behind the scenes to make missions safer and more accessible. I'm currently building a flagging system to report scam-like missions while ensuring safe mission visibility for verified and unverified organizations. Tech stack: Django, PostgreSQL, Docker, and Google Cloud.
                        </p>
                    </div>
                }
                textLeft={true}
                image="/MVHQ.png"
                year="Aug 2024"
            />


            <ExperienceCard 
                hook="Full-Stack Software Engineer"
                position="Elavize"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                        Developed a platform to streamline the job application process, helping candidates navigate from initial application to final offer. I led end-to-end development efforts, including secure authentication systems, AI-tooling integrations, and a dynamic kanban board for application tracking.
                        </p>
                        <p>
                        I also managed rigorous API development, performed extensive testing with Postman, and optimized database schemas for performance. My role included bug tracking and resolution, which ensured smooth deployments and enhanced user experience. Tech stack: NextJS, Node/Express, MongoDB, AWS, and Google Cloud.
                        </p>
                    </div>
                }
                textLeft={false}
                image="/ELAVIZE.png"
                year="Jun 2023 - Aug 2024"
            />

            <ExperienceCard 
                hook="Partnership & Devlopment Lead"
                position="Superlative Secret Society"
                children={
                    <div className="space-y-6 text-xs">
                        <p>
                        At the forefront of the NFT boom, I led a community of over 5,000 NFT holders, deeply immersed in blockchain technology and Web3 innovations. By streamlining communication between cross-functional teams, we achieved over $9 million in secondary sales. I also contributed to philanthropic efforts, raising $70,000 to provide over 85,000 meals to those in need globally.
                        </p>
                        <p>
                        This client-facing role introduced me to the transformative power of technology and inspired my journey into using it to hopefully create a positive impact in everyday life.
                        </p>
                    </div>
                }
                textLeft={true}
                image="/SuperlativeSecretSociety.png"
                year="2021"
            />

       
        </div>
    )
}

export default Experiences