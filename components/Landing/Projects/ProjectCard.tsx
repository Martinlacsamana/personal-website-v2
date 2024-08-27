import React from "react"
import Image from "next/image"
import Link from "next/link"

interface LinkItem {
    label: string;
    url: string;
}

interface Props {
    hook: string,
    position: string,
    children: React.ReactNode,
    image?: string,
    links: LinkItem[]
}

const ProjectCard = ({hook, position, children, image, links}: Props) => {
    return (
        <div className="flex flex-col w-full max-w-sm mx-auto bg-transparent border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-gray-500 transition-all duration-300">
            {image && (
                <div className="w-full h-64 relative">
                    <Image 
                        src={image} 
                        alt="Project image" 
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-2">{hook}</h2>
                    <h3 className="text-sm text-gray-400 mb-4">{position}</h3>
                    <div className="text-gray-300 text-sm">
                        {children}
                    </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                    {links.map((link, index) => (
                        <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                                {link.label} →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard