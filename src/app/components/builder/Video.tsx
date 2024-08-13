"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
  url: string;
  width?: number;
  height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = 640,
  height = 360,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="video-player">
      {isClient ? (
        <ReactPlayer
          url={url}
          width={width}
          height={height}
          controls
          style={{ border: "1px solid #ddd" }}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default VideoPlayer;
