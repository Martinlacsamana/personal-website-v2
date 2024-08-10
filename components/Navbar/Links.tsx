import React from "react"
import Image from 'next/image'

const Links = () => {

    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <li tabIndex={0} className="hover:text-black"><a>Links</a></li>
            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <a className="flex items-center" href="mailto:martinlacsamana@gmail.com" >
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-gmail-48.png" // Update with the correct path to your LinkedIn icon
                            alt="Gmail Icon" 
                            width={20} // Set appropriate width
                            height={20} // Set appropriate height
                            className="" // Add margin to the right for spacing
                        />
                        <p>Gmail</p>
                        
                    </a>
                </li>
                <li>
                    <a className="flex items-center" href="https://www.linkedin.com/in/martin-lacsamana/"target="_blank" 
                        rel="noopener noreferrer">
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-linkedin-48+(1).png" // Update with the correct path to your LinkedIn icon
                            alt="LinkedInIcon" 
                            width={20} // Set appropriate width
                            height={20} // Set appropriate height
                            className="" // Add margin to the right for spacing
                        />
                        <p>LinkedIn</p>
                        
                    </a>
                </li>
                <li>
                    <a className="flex items-center" href="https://github.com/Martinlacsamana" target="_blank" 
                        rel="noopener noreferrer">
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-github-50.png" // Update with the correct path to your LinkedIn icon
                            alt="Github icon" 
                            width={20} // Set appropriate width
                            height={20} // Set appropriate height
                            className="" // Add margin to the right for spacing
                        />
                        <p>Github</p>
                        
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Links