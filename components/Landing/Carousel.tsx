import React, { useEffect } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import CarouselItem from "./Carouseltem";

const Carousel = () => {
  const technologies = [
    "Firebase",
    "NextJS",
    "NodeJS",
    "Django",
    "MongoDB",
    "AWS",
    "Python",
    "Java",
    "Golang",
    "Typescript",
    "Docker",
    "Postman",
    "Linear",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; // minus 8 is because of the gap we have between the images

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 80,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });

    // This is our cleanup when this component dismounts
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <main className="pb-8 pt-2 md:pt-6 relative group w-screen -ml-[50vw] left-1/2">
      {/* Carousel - will stay visible but dim on hover */}
      <motion.div
        className="absolute left-0 flex gap-20 transition-opacity duration-300 group-hover:opacity-30"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <CarouselItem key={index} tech={tech} />
        ))}
      </motion.div>

      {/* Hover overlay with text */}
      <div className="absolute inset-0 opacity-0 h-32 md:h-40 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="bg-gray-900/60 px-6 py-3 rounded-xl text-gray-300/95 text-lg md:text-xl font-extralight tracking-[0.2em] uppercase backdrop-blur-sm">
          Technologies Used
        </p>
      </div>
    </main>
  );
};

export default Carousel;