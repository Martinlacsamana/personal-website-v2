import React from "react"
import Image from "next/image"

interface Props {
    hook: string,
    position: string,
    year: string,
    children: React.ReactNode,
    image?: string,
    textLeft: boolean
}

const ExperienceCard = ({hook, position, year, children, textLeft, image}: Props) => {
    const textContent = (
        <div className="flex-1 space-y-6 max-w-xl">
            <h2 className="w-2/3 text-4xl font-normal text-white">{hook}</h2>
            <h1 className="text-lg text-white font-semibold opacity-100">
                {position} <span className="mx-2">·</span> <span className="italic font-light text-md">{year}</span>
            </h1>
            <div className="w-3/4 text-white text-sm opacity-60">
                {children}
            </div>
        </div>
    );

    const imageContent = (
        <div className="w-[550px] h-[300px] bg-gray-600 opacity-90 rounded-md flex-shrink-0">
            {image && (
                <Image 
                    src={image} 
                    alt="Experience image" 
                    width={550} 
                    height={300}
                    style={{ objectFit: 'cover' }}
                />
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