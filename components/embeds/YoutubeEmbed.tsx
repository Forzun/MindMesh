"use client";

import { getYouTubeId } from "@/lib/utils/extractSpotifyId";

export default function YoutubeEmbed({ url }: { url: string }) {
  const id = getYouTubeId(url);

  return (
    <iframe
      className="rounded-md w-full"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
