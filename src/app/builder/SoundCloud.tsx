import React from "react";

interface SoundCloudProps {
  trackUrl: string; // URL of the SoundCloud track or playlist
}

const SoundCloud: React.FC<SoundCloudProps> = ({
  trackUrl = "https://soundcloud.com/octobersveryown/drake-young-thug-21-savage-its?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
}) => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
    </div>
  );
};

export default SoundCloud;
