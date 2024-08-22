import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // duration in milliseconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex">
        <h1 className="text-6xl font-bold text-black">{count}</h1>
      </div>
      <div className="flex">
        <p className="text-2xl font-bold text-black">cool number</p>
      </div>
    </div>
  );
};

export default Counter;
