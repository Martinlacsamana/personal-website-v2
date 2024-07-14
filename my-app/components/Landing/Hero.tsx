import Link from "next/link";
import ElavizeComponent from "@/components/elavize"
import AWSComponent from "@/components/aws";
import TypewriterEffect from "@/components/typewriter";

const Hero = () => {
    return (
        <div className="container px-4 py-12 md:py-16 lg:py-20">
            <div className="grid gap-6 md:gap-8 lg:gap-10 items-center justify-center text-center">
                {/* INTRODUCTION TEXT */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-wide sm:text-base md:text-sm/looser">Introducing</p>
                    <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl/looser">Martin Lacsamana</h1>
                    <div className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        <TypewriterEffect text="Aspiring Engineer. Expert Google Searcher." typingSpeed={80}/>
                    </div>
                </div>

                {/* HEADSHOT */}
                <div className="flex flex-col justify-center items-center -mt-8 mb-2">
                    <img
                    alt="Gallery Image 1"
                    className="overflow-hidden rounded-md object-cover w-full max-w-xs"
                    src="/MartinAvatarNoBackground.png"
                    />
                    <span className="text-xs text-gray-400 mt-2">(AI-generated)</span>
                </div>
                
                {/* EXPLORE BUTTON */}
                <div className="flex justify-center mb-12">
                    <Link href="#dominoes" className="bg-black text-white font-normal py-4 px-6 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg transition ease-in duration-200 text-center text-base">
                        Explore My Why
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero