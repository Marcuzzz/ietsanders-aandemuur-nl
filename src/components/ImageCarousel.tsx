
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
      <div className="w-full h-96 bg-gray-50 flex items-center justify-center border border-gray-100">
        <span className="text-gray-400 font-light">Geen afbeeldingen beschikbaar</span>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative w-full h-96 lg:h-[500px] overflow-hidden shadow-lg border border-gray-100">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Artwork ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex && !isTransitioning 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 text-sm font-light border border-gray-200">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-700 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Ga naar afbeelding ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation for larger screens */}
      {images.length > 1 && (
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-8">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-full h-24 overflow-hidden transition-all duration-300 border ${
                index === currentIndex
                  ? 'border-amber-700 border-2 opacity-100'
                  : 'border-gray-200 hover:border-amber-400 opacity-75 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
