import React, { useEffect } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import CarouselItem from "./Carouseltem";

const Carousel = () => {
  const technologies = [
    "Postman",
    "NextJS",
    "React",
    "NodeJS",
    "Django",
    "MongoDB",
    "AWS",
    "Google Cloud",
    "Python",
    "Java",
    "Javascript",
    "RISC-V",
    "Golang",
    "Typescript",
    "Sample 1",
    "Sample 2",
    "Sample 3",
    "Sample 4",
    "Sample 5",
    "Sample 6"
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; // minus 8 is because of the gap we have between the images

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 40,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });

    // This is our cleanup when this component dismounts
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <main className="pb-8">
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