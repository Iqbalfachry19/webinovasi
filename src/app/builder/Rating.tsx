import React, { useState } from "react";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

const Rating: React.FC<{
  initialRating?: number;
  onRate?: (rating: number) => void;
}> = ({ initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (rate: number) => {
    setRating(rate);
    if (onRate) {
      onRate(rate);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          className={`focus:outline-none ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
        >
          {rating >= star ? (
            <SolidStar className="h-6 w-6" />
          ) : (
            <OutlineStar className="h-6 w-6" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Rating;
