import Script from "next/script";

export default function TwitterEmbed({
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