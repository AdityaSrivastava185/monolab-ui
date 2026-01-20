"use client";

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/loopbg-01.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to make content readable */}
      <div className="absolute inset-0" />
    </div>
  );
}
