"use client";

export function BackgroundVideo() {
  return (
    // Container is positioned to fill its nearest positioned ancestor (usually the hero section)
    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl md:rounded-2xl" aria-hidden>
      {/* Video fills the container and uses object-cover so it always covers the area.
          Use centering with min-width/min-height so the video covers small viewports too. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/loopbg-01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay div kept for layering (transparent by default) */}
      <div className="absolute inset-0" />
    </div>
  );
}
