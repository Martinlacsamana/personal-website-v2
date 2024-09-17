import React from "react"
import Image from "next/image"

interface Props {
    hook: string,
    position: string,
    year: string,
    children: React.ReactNode,
    image?: string,
    textLeft: boolean
    link?: string
}

const ExperienceCard = ({hook, position, year, children, textLeft, image, link}: Props) => {
    const textContent = (
        <div className="flex-1 space-y-6 max-w-xl">
            <h2 className="w-2/3 text-4xl font-normal text-white">{hook}</h2>
            <h1 className="text-lg text-white font-semibold opacity-100">
                {position} <span className="mx-2">·</span> <span className="italic font-light text-md">{year}</span>
            </h1>
            <div className="w-3/4 text-white text-sm ">
                {children}
            </div>
        </div>
    );

    const imageContent = (
        <div className="relative w-[550px] h-[300px] bg-gray-600 rounded-md flex-shrink-0 group overflow-hidden">
            {image && (
                <Image 
                    src={image} 
                    alt="Experience image" 
                    width={550} 
                    height={300}
                    style={{ objectFit: 'cover' }}
                    className="rounded-md transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 
                            transition-all duration-300 flex items-center justify-center 
                            border-2 border-transparent group-hover:border-gray-600">
                <span className="text-white text-md opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 px-4 py-2 bg-purple-800 rounded-lg 
                                 transform scale-0 group-hover:scale-100 transition-transform">
                    {position === "Elavize" ? "Under Construction" : 
                     link ? "Visit Website" : ""}
                </span>
            </div>
            {link && position !== "Elavize" && (
                <a href={link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="absolute inset-0"
                   aria-label="Visit Website">
                </a>
            )}
        </div>
    );

    return (
        <div className="flex w-full justify-center">
            <div className="flex w-11/12 items-center justify-center gap-8">
                {textLeft ? (
                    <>
                        {textContent}
                        {imageContent}
                    </>
                ) : (
                    <>
                        {imageContent}
                        <div className="pl-12">
                            {textContent}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ExperienceCard