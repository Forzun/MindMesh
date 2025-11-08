import Script from "next/script";

export default function RedditEmbed({
  url,
  height = 500,
}: {
  url: string;
  height?: number | undefined;
}) {
  return (
    <>
      <blockquote
        className="reddit-embed-bq"
        data-embed-theme="dark"
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
