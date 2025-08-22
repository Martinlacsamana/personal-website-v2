import TypewriterEffect from "@/components/typewriter";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="container px-4 pt-12 md:pt-16 lg:pt-12 pb-12">
            <div className="grid gap-6 md:gap-8 lg:gap-10 items-center justify-center text-center">
                {/* INTRODUCTION TEXT */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-wide text-white opacity-80 sm:text-base md:text-sm/looser">Introducing</p>
                    <h1 className="text-4xl font-semibold tracking-tighter text-white opacity-80 sm:text-5xl md:text-6xl/looser">Martin Lacsamana</h1>
                    <div className="mx-auto text-sm sm:text-lg max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        <TypewriterEffect text="Lead Full Stack Engineer | UC Berkeley EECS" typingSpeed={40}/>
                    </div>
                </div>

                {/* HEADSHOT */}
                <div className="flex flex-col justify-center items-center md:-mt-8 mb-2">
                    <div className="relative w-full max-w-[200px] sm:max-w-sm" style={{ aspectRatio: '1 / 1' }}>
                        <Image
                            alt="Martin Lacsamana"
                            className="rounded-md filter brightness-90 profile-image"
                            src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/MartinAvatarNoBackground.png"
                            layout="fill"
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <span className="text-xs text-gray-500 mt-2">(AI-generated)</span>
                </div>
            </div>
        </div>
    )
}

export default Hero