import React, { useState } from 'react';

const Projects = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

return (
    <div className="relative w-full h-64 my-12">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 cursor-pointer" onClick={prevSlide}>
            ◀
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 cursor-pointer" onClick={nextSlide}>
            ▶
        </div>
        <div className="w-full h-full overflow-hidden">
            <img
                src={images[currentIndex]}
                alt="carousel"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            />
        </div>
    </div>
);
};

export default Projects;

