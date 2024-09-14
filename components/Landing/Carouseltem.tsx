import React from "react";

interface CarouselItemProps {
  tech: string;

}

const CarouselItem: React.FC<CarouselItemProps> = ({ tech }) => {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
      <img
        src={`/logos/${tech.toLowerCase().replace(/\s+/g, '-')}.svg`}
        alt={`${tech} logo`}
        className="max-w-full max-h-full w-auto h-auto filter"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default CarouselItem;
