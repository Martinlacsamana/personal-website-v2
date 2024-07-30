import TypewriterEffect from "@/components/typewriter";


const Hero = () => {
    return (
        <div className="container px-4 pt-12 md:pt-16 lg:pt-12">
            <div className="grid gap-6 md:gap-8 lg:gap-10 items-center justify-center text-center">
                {/* INTRODUCTION TEXT */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-wide sm:text-base md:text-sm/looser">Introducing</p>
                    <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl/looser">Martin Lacsamana</h1>
                    <div className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        <TypewriterEffect text="AWS Certified Developer. Expert Google Searcher." typingSpeed={80}/>
                    </div>
                </div>

                {/* HEADSHOT */}
                <div className="flex flex-col justify-center items-center -mt-8 mb-2">
                    <img
                        alt="Gallery Image 1"
                        className="overflow-hidden rounded-md object-cover w-full max-w-xs"
                        src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/MartinAvatarNoBackground.png"
                    />
                    <span className="text-xs text-gray-400 mt-2">(AI-generated)</span>
                </div>
                
                {/* EXPLORE BUTTON */}
                {/* <div className="flex justify-center">
                    <Link href="#dominoes" className="bg-black text-white font-normal py-4 px-6 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg transition ease-in duration-200 text-center text-base">
                        Explore My Why
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Hero