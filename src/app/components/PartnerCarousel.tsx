"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive"; // Import the hook

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(71); // Default to desktop size
  const delay = 5000; // 5 seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const partners = [
    { id: "partner-1", src: "/Frame-3228.svg", alt: "Partner 1" },
    { id: "partner-2", src: "/Frame-3229.svg", alt: "Partner 2" },
    { id: "partner-3", src: "/Frame-3230.svg", alt: "Partner 3" },
    { id: "partner-4", src: "/Frame-3231.svg", alt: "Partner 4" },
    { id: "partner-5", src: "/Frame-3232.svg", alt: "Partner 5" },
    { id: "partner-6", src: "/Frame-3233.svg", alt: "Partner 6" },
    { id: "partner-7", src: "/Frame-3234.svg", alt: "Partner 7" },
  ];

  // Duplicate partners array to create a looping effect
  const partnersExtended = [
    ...partners.map((partner, index) => ({
      ...partner,
      id: `${partner.id}-1`, // Append suffix to make the id unique
    })),
    ...partners.map((partner, index) => ({
      ...partner,
      id: `${partner.id}-2`, // Append suffix to make the id unique
    })),
  ];

  const itemsToShow = partners.length; // Number of logos shown at once

  // Use media query to determine screen size
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Adjust the breakpoint as needed

  useEffect(() => {
    // Set the item width based on the screen size
    setItemWidth(isMobile ? 130 / itemsToShow : 71 / itemsToShow);
  }, [isMobile, itemsToShow]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, partners.length]);

  return (
    <div className="relative h-40 w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * itemWidth}%)`,
          width: `${itemWidth * partnersExtended.length}%`,
        }}
      >
        {partnersExtended.map((partner) => (
          <div
            key={partner.id}
            className="flex h-full flex-shrink-0 items-center justify-center"
            style={{ width: `${itemWidth}%` }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={150} // Adjusted width
              height={80} // Adjusted height
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
