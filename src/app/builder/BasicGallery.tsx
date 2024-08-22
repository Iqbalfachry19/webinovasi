import React, { useState } from "react";
import Modal from "./Modal";

interface BasicGalleryProps {
  images: string[];
}

const BasicGallery: React.FC<BasicGalleryProps> = ({
  images = [
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
    "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
  ],
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleImageClick(src)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="h-40 w-full object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          imageSrc={selectedImage}
          altText="Selected Image"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BasicGallery;
