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

function SpotifyEmbed({}) {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=oembed"
        allow="clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"
        className="rounded-xl"
        width="100%"
        height="352"
      ></iframe>
    </div>
  );
}

export { RedditEmbed, TwitterEmbed, SpotifyEmbed };
