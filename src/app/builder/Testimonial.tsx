import React from "react";

interface TestimonialProps {
  name: string;
  feedback: string;
  imageSrc: string;
  designation?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  feedback = "lorem ipsum",
  imageSrc = "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
  designation = "Customer",
}) => {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 text-center shadow-md">
      <img
        src={imageSrc}
        alt={`${name}'s photo`}
        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
      />
      <p className="mb-2 text-lg font-semibold">{name}</p>
      <p className="mb-4 text-sm text-gray-500">{designation}</p>
      <p className="italic text-gray-700">&quot;{feedback}&quot;</p>
    </div>
  );
};

export default Testimonial;
