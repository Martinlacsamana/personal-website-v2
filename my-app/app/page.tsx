
import Link from "next/link";
import ElavizeComponent from "@/components/elavize"
import AWSComponent from "@/components/aws";
import TypewriterEffect from "@/components/typewriter";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
        <div className="container px-4 py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 md:gap-8 lg:gap-10 items-center justify-center text-center">
              <div className="space-y-3">
                  <p className="text-sm font-semibold tracking-wide sm:text-base md:text-sm/looser">Introducing</p>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/looser">Martin Lacsamana</h1>
                  <div className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {/* <p>Thrill-Seeker. Aspiring Engineer.</p> */}
                    <TypewriterEffect text="Thhrill-Seeker. Aspiring Engineer." typingSpeed={80}/>
                  </div>

                  
              </div>

              <div className="flex flex-col justify-center items-center -mt-8 mb-2">
                <img
                  alt="Gallery Image 1"
                  className="overflow-hidden rounded-md object-cover w-full max-w-xs"
                  src="/MartinAvatarNoBackground.png"
                />
                <span className="text-xs text-gray-400 mt-2">(AI-generated)</span>

              </div>
              

            




              <div className="flex justify-center mb-12">
                <Link href="#dominoes" className="bg-black text-white font-semibold py-4 px-6 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg transition ease-in duration-200 text-center text-base">
               
                    Explore My Purpose
               
                </Link>
              </div>

        

            <div className="space-y-3 pt-24 " id="dominoes">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">They say a picture is worth a thousand words.</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  What can the following pictures tell us?
                </p>
            </div>

            {/* Images section*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-4">
              <div className="border border-gray-300 pb-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transition-transform duration-50 ease-in-out hover:scale-105">
                  <img
                    alt="Gallery Image 1"
                    className="aspect-video overflow-hidden rounded-t-lg object-cover object-top"
                    src="/Skydiving1.jpg"
                  />
                  <p className="text-sm tracking-wide sm:text-base md:text-sm italic font-medium text-gray-600 mt-2 px-4 py-2">Skydiving in California</p>
              </div>
              
              <div className="border border-gray-300 pb-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transition-transform duration-50 ease-in-out hover:scale-105">
                <img
                  alt="Gallery Image 2"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-top"
                  src="/WhaleShark.JPG"
                />
                <p className="text-sm tracking-wide sm:text-base md:text-sm italic font-medium text-gray-600 mt-2 px-4 py-2">Swimming w/ Whale Sharks</p>
              </div>

              <div className="border border-gray-300 pb-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transition-transform duration-50 ease-in-out hover:scale-105">
                <img
                  alt="Gallery Image 3"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-top"
                  src="/Ceros.jpg"
                />
                <p className="text-sm tracking-wide sm:text-base md:text-sm italic font-medium text-gray-600 mt-2 px-4 py-2">Presenting Internship Recap</p>
              </div>
            
            </div>


            <div className=" w-full mt-6">
              <div className="flex flex-col justify-center items-center shadow-md rounded-lg border-2 rounded-lg p-6 space-y-4">

                  <div>
                      <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
                        <span className="font-semibold">Do the next scariest thing. </span>
                        Whether it's leaping from a plane at 13,500 feet in the air, swimming with oceanic beasts 4 times bigger than you, or putting yourself in front of professionals as a complete noob, the theme was constant. <span className="font-semibold">Do it if it makes you uncomfortable. </span>
                        the common thread has been a willingness to embrace fear and take risks. This philosophy has not only shaped my personal adventures but has also been a driving force in my
                        professional growth as an engineer. By stepping out of my comfort zone and facing challenges head-on, I've
                        learned that the most rewarding experiences come from the moments when we dare to venture beyond the
                        familiar.
                      </p>
                  </div>
                  

                  {/* Put a graphic here on growth*/}
                  <div>
                      <img
                        alt="Gallery Image 3"
                        className="aspect-video overflow-hidden rounded-md shadow-md object-cover"
                        src="DominoEffect2.png"
                      />
                      <p className="text-sm tracking-wide sm:text-base md:text-sm/looser">Short Description</p>
                  </div>
              </div>
            </div>



           


          </div>
        </div>
        
     







     
    
        
   
      <div className="container py-4 md:py-4">
        <div className="grid gap-6 md:gap-8 lg:gap-10 items-center justify-center text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Latest Domino Takedowns</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Finding my niche.
            </p>
          </div>
          
         
        </div>

        <ElavizeComponent/>
        <AWSComponent/>
      </div>







    </div>
  );
}
