
import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Geen afbeeldingen beschikbaar</span>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Artwork ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              index === currentIndex && !isTransitioning 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-amber-700 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ga naar afbeelding ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation for larger screens */}
      {images.length > 1 && (
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-full h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'ring-4 ring-amber-700 scale-105'
                  : 'hover:scale-102 hover:ring-2 hover:ring-amber-400'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 transition-opacity duration-200 ${
                index === currentIndex ? 'bg-amber-700/20' : 'bg-black/20'
              }`}></div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
