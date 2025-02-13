import React from "react"
import Image from 'next/image'

const Links = () => {

    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <li tabIndex={0} className="hover:text-white hover:bg-gray-900 rounded-lg"><a>Links</a></li>
            <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <a className="flex items-center" href="https://www.linkedin.com/in/martin-lacsamana/"target="_blank" 
                        rel="noopener noreferrer">
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-linkedin-48+(1).png" // Update with the correct path to your LinkedIn icon
                            alt="LinkedInIcon" 
                            width={20}
                            height={20}
                            className=""
                        />
                        <p className="">LinkedIn</p>
                        
                    </a>
                </li>
    
                <li>
                    <a className="flex items-center" href="https://github.com/Martinlacsamana" target="_blank" 
                        rel="noopener noreferrer">
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-github-50.png" // Update with the correct path to your LinkedIn icon
                            alt="Github icon" 
                            width={20}
                            height={20}
                            className=""
                        />
                        <p className="">Github</p>
                        
                    </a>
                </li>
                
                <li>
                    <a className="flex items-center" href="https://personal-website-random-assets.s3.us-west-1.amazonaws.com/Martin_Lacsamana_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Image 
                            src="/reshot-icon-resume-92U4B7WG8Y.svg" 
                            alt="Resume Icon" 
                            width={18}
                            height={18}
                            className=""
                        />
                        
                        <p className="">Resume</p>
                        
                    </a>
                </li>

                <li>
                    <a className="flex items-center" href="mailto:martinlacsamana.dev@gmail.com" >
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-gmail-48.png" // Update with the correct path to your LinkedIn icon
                            alt="Gmail Icon" 
                            width={20}
                            height={20}
                            className=""
                        />
                        <p className="">Gmail</p>
                        
                    </a>
                </li>
                
            </ul>
        </div>
    )

}

export default Links