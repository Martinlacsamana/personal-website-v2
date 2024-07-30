import React from 'react'

const ShortBackground = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-4">

            
            <div className="flex w-4/5 items-center">
                
                {/* TEXT */}
                <div className="w-full flex flex-col items-center justify-center w-full space-y-2 text-left">
                    
                    <p className="w-2/3  text-2xl font-normal tracking-[-1.20px] leading-[51.4px] bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent text-black">
                        Be relentless in the face of adversity.
                    </p>
                    <p className="w-2/3 text-md font-light text-gray-500 pb-4">
                        is what my parents would always tell me growing up - that in order to achieve things I&apos;ve never had <span className="font-bold"> I&apos;d have to do things I&apos;ve never done. </span>
                        My mission then became to observe from afar, learn from my role models, and strive to make my own mark.
                    </p>
                    
                </div>

                {/* PICTURE */}
                <div className="w-full flex justify-center items-center">
                    <div className="w-3/4 pt-2 pb-6">   
                        <img src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/observing.JPG" alt="Observing during childhood" className="w-full h-auto object-cover rounded-lg shadow"/>
                    </div>
                </div>
                

                {/* <button className="bg-gray-100 text-gray-800 font-normal py-2  px-4 border border-gray-300 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition ease-in duration-200 text-center text-base">
                    <div className="flex items-center justify-center space-x-1">
                        <p>My Background</p>
                        <ArrowUpRight size={20}/>
                    </div>
                </button> */}
            </div>

        </div>
    )
}

export default ShortBackground