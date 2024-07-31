import React from 'react'

const ShortBackground = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-4 md:pt-8 md:pb-4">
            <div className="flex flex-col md:flex-row w-full md:w-4/5 items-center">
                
                {/* TEXT */}
                <div className="w-full flex flex-col items-center justify-center space-y-4 text-center md:text-left  md:mb-0">
                    <p className="w-5/6 md:w-2/3 text-2xl md:text-3xl font-normal tracking-[-1.20px] leading-tight  bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent text-black">
                        Be relentless in the face of adversity,
                    </p>
                    <p className="w-5/6 md:w-2/3 text-md md:text-md font-light text-gray-500 pb-4">
                        my parents would always tell me growing up. They taught me that to achieve what I&apos;ve never had, <span className="text-gray-600 font-bold"> I must do things I&apos;ve never done. </span>
                        My mission became clear: observe from afar, learn from my role models, and strive to make my own mark.
                    </p>
                </div>

                {/* PICTURE */}
                <div className="w-full flex justify-center items-center">
                    <div className="w-5/6 md:w-3/4 pt-2 pb-6">   
                        <img src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/observing.JPG" alt="Observing during childhood" className="w-full h-auto object-cover rounded-lg shadow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortBackground