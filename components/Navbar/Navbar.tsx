"use client"
import React from 'react'
import Links from './Links'
import Link from 'next/link'


const Navbar = () => {



    return (
        <div className="navbar sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            {/* Martin */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-extralight tracking-[0] leading-6 whitespace-nowrap text-white text-opacity-80 hover:text-opacity-100 transition-opacity">Martin</a>
            </div>
    
            {/* Background, Blogs, Links */}
            <div className="flex-none font-extralight text-white text-opacity-100 text-[15.6px] tracking-[0] leading-6 whitespace-nowrap">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0} className="hover:text-black">
                        <Link href="#experiences">Experiences</Link>
                    </li>
                    <li tabIndex={0} className="hover:text-black">
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li tabIndex={0} className="hover:text-black"><a>Background</a></li>
                    <Links/>
                    

                </ul>
            </div>
        </div>
    )

}

export default Navbar