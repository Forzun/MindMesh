"use client";

import DeleteIcon from "@/components/icons/delete-icon";
import ShareIcon from "@/components/icons/share-icon";
import TwitterSvg from "@/components/icons/x-svg";
import { useState } from "react";
import Script from "next/script";

export default function Test() {
  return (
    <div className="max-w-screen min-h-screen px-5">
      <Dashboard />
    </div>
  );
}

const Dashboard = () => {
  const [hidden, setHidden] = useState(true);

  function truncate(str: string, n: number) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div className="flex flex-1 h-full justify-center">
      <div
        onClick={() => setHidden(!hidden)}
        className="min-h-fit w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:pl-5 pl-12 pt-10"
      >
        <div className="bg-white dark:bg-neutral-900  rounded-xl min-w-80 w-full h-fit border-1 border-dashed border-inset px-3 py-3 transition-normal duration-200 delay-75 hover:inset-shadow-sm hover:inset-shadow-neutral-800 transition-all ease-in">
          <div className="flex flex-col w-full h-full gap-2">
            <div className="flex items-center justify-between">
              <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
                <TwitterSvg />
                <div className="h-10"></div>
                <h1 className="hover:text-neutral-400 transition-all duration-200 text-[14px]">
                  {truncate(
                    "Learn how to build a social media platform with Next.js",
                    45
                  )}
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                {[
                  { id: 1, icon: <ShareIcon /> },
                  { id: 2, icon: <DeleteIcon className="text-neutral-300" /> },
                ].map((icon, index) => {
                  return <Icon key={index}>{icon.icon}</Icon>;
                })}
              </div>
            </div>

            <div
              data-theme="light"
              className={`flex justify-center overflow-hidden transition-all duration-300 ease-in ${
                hidden ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
              }`}
            >

              <TwitterEmbed url="https://twitter.com/sarthaktwtt/status/1981774541719580710?ref_src=twsrc%5Etfw" />
              {/* reddit */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md px-2 py-2 group border-[1px] bg-neutral-700/30 hover:bg-neutral-900/40 transition-all ease-in duration-300 border-dashed border-neutral-600 text-white">
      {children}
    </div>
  );
}

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
