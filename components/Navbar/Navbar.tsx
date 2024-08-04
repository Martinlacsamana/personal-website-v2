"use client"
import React, {useState} from 'react'
import Image from 'next/image'


const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="navbar sticky top-0 z-50 bg-white">
            {/* Martin */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-gray-900 font-light">Martin</a>
            </div>

            {/* Background, Blogs, Contact Me*/}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                    
                    {/* CONTACT ME */}
                    <div className="dropdown dropdown-end dropdown-hover">
                        <li tabIndex={0} className="hover:text-black"><a>Contact Me</a></li>
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
                    {/* <li className="hover:text-black"><a>My Background</a></li>
                    <li className="hover:text-black"><a>Contact Me</a></li> */}
                </ul>
            </div>

            
        </div>

    )

}

export default Navbar