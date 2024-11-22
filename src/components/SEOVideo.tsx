import React from "react";

interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  title?: string;
  tracks?: {
    src: string;
    kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    srcLang?: string;
    label?: string;
  }[];
}

const SEOVideo: React.FC<VideoProps> = ({
  src,
  poster,
  width,
  height,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  preload = "auto",
  title,
  tracks = [],
}) => {
  return (
    <>
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload={preload}
        title={title}
        controlsList="nodownload"
        className="w-full h-full object-cover overflow-hidden"
      >
        {tracks.map((track, index) => (
          <track
            key={index}
            src={track.src}
            kind={track.kind}
            srcLang={track.srcLang}
            label={track.label}
          />
        ))}
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </>
  );
};

export default SEOVideo;
