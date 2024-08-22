import React, { useState, useEffect } from "react";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = 50; // target percentage
    const duration = 2000; // duration in milliseconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progressPercentage = Math.min(
        (elapsedTime / duration) * targetProgress,
        targetProgress,
      );
      setProgress(progressPercentage);

      if (progressPercentage < targetProgress) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-full max-w-md p-4">
      <div className="h-4 rounded bg-gray-300">
        <div
          className="h-full rounded bg-blue-500"
          style={{
            width: `${progress}%`,
            transition: "width 0.2s ease-in-out",
          }}
        />
      </div>
      <p className="mt-2 text-center text-black">{Math.round(progress)}%</p>
    </div>
  );
};

export default ProgressBar;
