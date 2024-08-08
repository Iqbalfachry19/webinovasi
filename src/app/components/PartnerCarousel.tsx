"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 5000; // 5 seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const partners = [
    { id: 1, src: "/Frame-3228.svg", alt: "Partner 1" },
    { id: 2, src: "/Frame-3229.svg", alt: "Partner 2" },
    { id: 3, src: "/Frame-3230.svg", alt: "Partner 3" },
    { id: 4, src: "/Frame-3231.svg", alt: "Partner 4" },
    { id: 5, src: "/Frame-3232.svg", alt: "Partner 5" },
    { id: 6, src: "/Frame-3233.svg", alt: "Partner 6" },
    { id: 7, src: "/Frame-3234.svg", alt: "Partner 7" },
  ];

  // Duplicate partners array to create a looping effect
  const partnersExtended = [...partners, ...partners];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === partners.length - 1 ? 0 : prevIndex + 1,
        ),
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
          transform: `translateX(${-currentIndex * (100 / partners.length)}%)`,
          width: `${(100 * partnersExtended.length) / partners.length}%`,
        }}
      >
        {partnersExtended.map((partner) => (
          <div
            key={partner.id}
            className="flex h-full flex-shrink-0 items-center justify-center"
            style={{ width: `${90 / partners.length}%` }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={170}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
