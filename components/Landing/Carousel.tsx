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
    "Firebase"
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
    <main className="pb-8 pt-6">
      <motion.div
        className="absolute left-0 flex gap-20"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <CarouselItem key={index} tech={tech} />
        ))}
      </motion.div>
    </main>
  );
};

export default Carousel;