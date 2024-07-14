import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ShortBackground = () => {

    return (
        <div className="flex w-full pt-8">
            {/* TEXT ON L.H.S*/}
            <div className="flex flex-col items-center justify-center text-left w-1/2">
                <div className="w-2/3 space-y-2">
                    <p className="text-3xl font-normal text-left font-sans text-[1.313rem] font-[360] leading-[135%] tracking-[.02em]">
                        So, I shut my mouth growing up (tried to) and observed from afar.
                    </p>
                    <p className="text-md font-light text-gray-500 text-left pb-4">
                        I learned the importance of facing the unknown - despite how scary it may be. This is where I learned about <span className="font-bold">using dominoes to overcome fear.</span>
                    </p>
                    <button className="bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition ease-in duration-200 text-center text-base">
                        <div className="flex items-center justify-center space-x-1">
                            <p>My Background</p>
                            <ArrowUpRight size={20}/>
                        </div>
                    </button>
                </div>
            </div>

            {/* PICTURE ON R.H.S*/}
            <div className="flex items-center justify-center w-1/2 py-12 pr-32">   
                <img src="/observing.JPG" alt="Observing during childhood" className="w-full h-auto object-cover rounded-lg shadow"/>
            </div>
        </div>
    )

}

export default ShortBackground