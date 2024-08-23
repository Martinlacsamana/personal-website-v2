"use client"
import React from 'react'
import Links from './Links'


const Navbar = () => {

    return (
        <div className="navbar sticky top-0 z-50 bg-white">
            {/* Martin */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-gray-900 font-light">Martin</a>
            </div>

            {/* Background, Blogs, Links */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                    
                    {/* <li className="hover:text-black">
                        <a href="https://personal-website-random-assets.s3.us-west-1.amazonaws.com/Martin_Lacsamana___Resume+(2).pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li> */}
                    <Links/>
                    
                    {/* <li className="hover:text-black"><a>Contact Me</a></li> */}
                </ul>
            </div>

            
        </div>

    )

}

export default Navbar