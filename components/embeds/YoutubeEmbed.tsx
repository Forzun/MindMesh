"use client"
export default function YoutubeEmbed({ url }: { url: string }) {
  const video = url.split("v=")[0]?.split("&")[0];

  return (
    <iframe
      className="rounded-md w-full"
      src={video}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
