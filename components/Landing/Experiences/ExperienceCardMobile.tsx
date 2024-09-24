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

const ExperienceCardMobile = ({hook, position, year, children, image, link}: Props) => {
    const textHeader = (
        <div className="flex-1 space-y-6 max-w-xl text-center">
            <h2 className="w-full text-4xl font-normal text-white">{hook}</h2>
            <h1 className="text-lg text-white font-semibold opacity-100">
                {position} <span className="mx-2">·</span> <span className="italic font-light text-md">{year}</span>
            </h1>
        </div>
    );

    const imageContent = (
        <div className="relative w-4/5 h-auto bg-gray-600 rounded-md flex-shrink-0 group overflow-hidden">
            {image && (
                <Image 
                    src={image} 
                    alt="Experience image" 
                    width={300} 
                    height={150}
                    layout="responsive"
                    objectFit="cover"
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

    const textDescription = (
        <div className="w-5/6 mx-auto text-white text-sm text-center">
            {children}
        </div>
    );

    return (
        <div className="flex flex-col w-full justify-center items-center gap-6">
            {textHeader}
            {imageContent}
            {textDescription}
        </div>
    )
}

export default ExperienceCardMobile