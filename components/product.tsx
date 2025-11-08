"use client";

import { extractSpotifyId } from "@/lib/utils/extractSpotifyId";
import Script from "next/script";

function RedditEmbed({
  url,
  theme = "dark",
  height = 500,
}: {
  url: string;
  theme?: "dark" | "light";
  height?: number;
}) {
  return (
    <>
      <blockquote
        className="reddit-embed-bq"
        data-embed-theme={theme}
        style={{ height: `${height}px` }}
      >
        <a href={url}>{url}</a>
      </blockquote>
      <Script
        src="https://embed.reddit.com/widgets.js"
        strategy="afterInteractive"
        charSet="UTF-8"
      />
    </>
  );
}

function TwitterEmbed({
  url,
  theme = "dark",
  height = 500,
}: {
  url: string;
  theme?: "dark" | "light";
  height?: number;
}) {
  return (
    <>
      <blockquote
        className="twitter-tweet"
        data-embed-theme={theme}
        data-lang="en"
        data-theme="dark"
        style={{ height: `${height}px` }}
      >
        <a href={url}>{url}</a>
      </blockquote>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        charSet="UTF-8"
      />
    </>
  );
}

function SpotifyEmbed({ url }: { url: string }) {
  const data = extractSpotifyId(url);

  if (!data) return <p className="text-red-500">Invalid Spotify URL</p>;

  const { type, id } = data;

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/${type}/${id}`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

function YoutubeEmbed({ url }: { url: string }) {
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

export { RedditEmbed, TwitterEmbed, SpotifyEmbed, YoutubeEmbed };
