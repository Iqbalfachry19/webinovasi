import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="h-auto w-full"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
