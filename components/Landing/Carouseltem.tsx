import React from "react";

interface CarouselItemProps {
  tech: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ tech }) => {
  return (
    
      <img
        src={`/logos/postman-svgrepo-com.svg`}
        alt={`${tech} logo`}
        className="h-32 w-auto filter grayscale"
        style={{ display: 'block' }}
      />

  );
};

export default CarouselItem;