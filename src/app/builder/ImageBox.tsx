import React from "react";

interface ImageBoxProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  description?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src = "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",

  alt,
  width = 300,
  height = 200,
  title = "This is the heading​",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​",
}) => {
  return (
    <div className="flex w-60 flex-col text-center">
      <img
        src={src}
        alt={alt || "Image"}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
      />

      <h3 className="text-black">{title}</h3>

      <p className="text-black">{description}</p>
    </div>
  );
};

export default ImageBox;
