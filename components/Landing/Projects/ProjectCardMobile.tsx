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

const ProjectCardMobile = ({hook, position, children, image, links}: Props) => {
    return (
        <div className="flex flex-col w-full max-w-full mx-auto bg-transparent border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-gray-500 transition-all duration-300">
            {image && (
                <div className="w-full h-48 relative flex-shrink-0">
                   <Image 
                        src={image} 
                        alt="Project image" 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                </div>
            )}
            <div className="p-5 flex flex-col justify-between">
                <div className="space-y-4 overflow-y-auto">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">{hook}</h2>
                        <h3 className="text-sm text-gray-400 mb-4">{position}</h3>
                        <div className="text-gray-300 text-sm">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
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

export default ProjectCardMobile