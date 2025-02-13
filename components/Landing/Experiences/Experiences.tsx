"use client"
import React, { useEffect } from "react"
import ExperienceCard from "./ExperienceCard"
import ExperienceCardMobile from "./ExperienceCardMobile"

const Experiences = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('scrollreveal').then((ScrollReveal) => {
                ScrollReveal.default().reveal('.experience-card', { 
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

    const renderCard = (props: any) => (
        <>
            <div className="hidden md:block">
                <ExperienceCard {...props} />
            </div>
            <div className="md:hidden">
                <ExperienceCardMobile {...props} />
            </div>
        </>
    );

    return (
        <div className="flex flex-col items-center justify-center w-full pb-24 md:-mt-28 space-y-28">
            <div id="experiences" className="relative text-center scroll-mt-20 -mb-12">
                <h1 className="sm:text-lg md:text-4xl md:font-bold text-white opacity-80 tracking-wide hidden md:block">WORK EXPERIENCE</h1>
                <p className="text-xl text-white opacity-80 mt-4 hidden md:block">
                    Striving to develop <span className="text-yellow-400">impactful</span> tech.
                </p>
            </div>

            <div id="SuperlativeSS" className="experience-card order-1 sm:order-3">
                {renderCard({
                    hook: "Partnership & Development Lead",
                    position: "Superlative Secret Society",
                    children: (
                        <div className="space-y-6 text-xs opacity-60">
                            <p>
                            At the forefront of the NFT boom, I led a community of over 5,000 NFT holders, deeply immersed in blockchain technology and Web3 innovations. By streamlining communication between cross-functional teams, we achieved over $9 million in secondary sales. Through an auction involving our art and passionate collectors, we raised over $70,000 (including smaller initiatives) to provide 85,000+ meals to those in need globally.
                            </p>
                            <p>
                            This client-facing role introduced me to the transformative power of technology and inspired my journey into using it to hopefully create a positive impact in everyday life.
                            </p>
                        </div>
                    ),
                    textLeft: true,
                    image: "/SuperlativeSecretSociety.png",
                    year: "2021 - 2022",
                    link: "https://opensea.io/collection/superlativesecretsociety"
                })}
            </div>

            <div className="experience-card order-2 sm:order-2">
                {renderCard({
                    hook: "Software Engineer Intern",
                    position: "Elavize",
                    children: (
                        <div className="space-y-6 text-xs opacity-60">
                            <p>
                                Led end-to-end development of a platform that streamlined the job application process, helping candidates navigate from initial application to final offer. The platform included secure authentication, AI-tooling integrations, and a dynamic kanban board for tracking applications. Tech stack: NextJS, Node/Express, MongoDB, AWS, and Google Cloud.
                            </p>
                        </div>
                    ),
                    textLeft: false,
                    image: "/ELAVIZE.png",
                    year: "2023 - 2024"
                })}
            </div>

            <div className="experience-card order-3 sm:order-1">
                {renderCard({
                    hook: "Software Engineer",
                    position: "Metaverse HQ",
                    children: (
                        <div className="space-y-6 text-xs opacity-60">
                            <p>
                            At the #1 Rewards Platform in the Metaverse, I helped shape the future of Web3 engagement by building systems that made the platform more secure and enjoyable for our community of 700K+ users. From enhancing security to optimizing performance, every line of code was written with our users' experience in mind. Tech stack: Django, PostgreSQL, Docker, and Google Cloud. For specific contributions,{' '}
                            <span>
                                <a 
                                    href="https://personal-website-random-assets.s3.us-west-1.amazonaws.com/Martin_Lacsamana_Resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-300 hover:text-blue-400 hover:underline"
                                >
                                 see resume here.
                                </a>
                            </span>
                            </p>
                        </div>
                    ),
                    textLeft: true,
                    image: "/MVHQ.png",
                    year: "2024 - 2025",
                    link: "https://app.mvhq.io/"
                })}
            </div>
        </div>
    )
}

export default Experiences