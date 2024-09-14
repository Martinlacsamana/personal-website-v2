import React from "react"

const Graphic = () => {
    const outlineTextStyle = {
        textShadow: `
            -2px -1px 0 rgba(255,255,255,0.4),  
             2px -1px 0 rgba(255,255,255,0.6),
            -1px  1px 0 rgba(255,255,255,0.3),
             1px  1px 0 rgba(255,255,255,0.3)
        `,
        WebkitMaskImage: 'linear-gradient(to bottom, white 80%, transparent 70%)',
        maskImage: 'linear-gradient(to bottom, white 50%, transparent 75%)'
    };

    return (
        <div className="relative w-full h-[479px] overflow-hidden mt-12">
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span 
                    className="text-[350px] md:text-[450px] font-semibold text-gray-800 opacity-20 tracking-tight"
                    style={outlineTextStyle}
                >
                    84K
                </span>
            </div>
            
            {/* Foreground content */}
            <div  className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white ">
                <h2 className="text-3xl md:text-4xl font-normal text-center w-3/4 md:w-1/2 text-gray-100 opacity-100 leading-[45px]">
                    Leveraged technology to raise <br></br><span className=" bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300 text-transparent bg-clip-text font-medium">84,000 meals</span> for children in need.
                </h2>
            </div>
        </div>
    )
}

export default Graphic