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

    const handleClick = () => {
        const element = document.getElementById('SuperlativeSS');
        if (element) {
          const yOffset = -180; // Adjust this value as needed
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
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
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white">
                <div 
                    className="tooltip w-3/4 md:w-1/2" 
                    data-tip="Click to learn how" 
                    onClick={handleClick}
                >
                    <h2 className="
                        text-3xl md:text-4xl font-normal text-center text-gray-100 opacity-100 leading-[45px] 
                        py-2 px-4 rounded-lg
                        transition-all duration-300 ease-in-out
                        hover:bg-gray-800 hover:shadow-lg hover:scale-105 hover:opacity-90
                        hover:cursor-pointer
                    ">
                        Leveraged technology to raise <br></br>
                        <span className="bg-gradient-to-r from-yellow-200 via-red-300 to-pink-300 text-transparent bg-clip-text font-medium">
                            84,000 meals 
                        </span> 
                        {' '} {/* This adds a space */}
                         for children in need.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Graphic