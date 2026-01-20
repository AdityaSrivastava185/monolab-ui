"use client";


export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden m-10 rounded-xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/loopbg-01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0" />
    </div>
  );
}
