import React from 'react'
import Image from 'next/image'

const ShortBackground = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-4 md:pt-48 md:pb-4">
            <div className="flex flex-col md:flex-row w-full md:w-4/5 items-center">
                
                {/* TEXT */}
                <div className="w-full flex flex-col items-center justify-center space-y-4 text-center md:text-left  md:mb-0">
                    <p className="w-5/6 md:w-2/3 text-2xl md:text-3xl font-normal tracking-[-1.20px] leading-tight text-gray-700">
                        Be relentless in the face of adversity,
                    </p>
                    <p className="w-5/6 md:w-2/3 text-md md:text-md font-light text-gray-500 pb-4">
                        my parents would always tell me growing up. They taught me that to achieve what I&apos;ve never had, I had to do things I&apos;ve never done.
                        <span className="text-gray-700 font-semibold"> My mission became clear: </span> observe my role models, face the unknown, and make a difference where I can.
                    </p>
                </div>

                {/* PICTURE */}
                <div className="w-full flex justify-center items-center">
                    <div className="w-5/6 md:w-3/4 pt-2 pb-6">   
                        <Image 
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Background.png" 
                            alt="Observing during childhood" 
                            className="rounded-lg shadow" 
                            layout="responsive" // Set layout to responsive
                            width={800} // Specify the width for aspect ratio
                            height={600} // Specify the height for aspect ratio
                            style={{ objectFit: 'cover' }} // Maintain the object-fit style
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortBackground