"use client";

import { useEffect, useState } from "react";
import { Tweet } from "react-tweet";
import TwitterSvg from "./icons/x-svg";
import ShareIcon from "./icons/share-icon";
import DeleteIcon from "./icons/delete-icon";
import YoutubeIcon from "./icons/activitys-icons";

interface CardProps {
  id: number;
  link: string;
  tag: string[];
  title: string;
  userId: number;
}

export default function Card({ data }: { data: CardProps }) {
  const [hidden, setHidden] = useState(true);
  console.log(data);

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const getEnbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  function truncate(str: string, n: number) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div
      onClick={() => setHidden(!hidden)}
      className="bg-white dark:bg-neutral-900 rounded-xl min-w-80 w-full min-h-7 h-fit border-1 border-dashed border-inset px-3 py-3 transition-normal duration-200 delay-75 hover:inset-shadow-sm hover:inset-shadow-neutral-800 transition-all ease-in"
    >
      <div className="flex flex-col w-full h-full gap-2">
        <div className="flex items-center justify-between">
          <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
            <span>
              {data.tag[0] === "youtube" ? <YoutubeIcon /> : <TwitterSvg />}
            </span>
            <div className="h-10"></div>
            <h1 className="hover:text-neutral-400 text-sm transition-all duration-200">
              {truncate(data.title, 45)}
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            <a className="flex gap-2 items-center" href={data.link}>
              {[
                { id: 1, icon: <ShareIcon /> },
                { id: 2, icon: <DeleteIcon className="text-neutral-300" /> },
              ].map((icon, index) => {
                return <Icon key={index}>{icon.icon}</Icon>;
              })}
            </a>
          </div>
        </div>
        <div
          data-theme="light"
          className={`flex justify-center overflow-hidden transition-all duration-300 ease-in ${
            hidden ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
          }`}
        >
          {data.tag[0] === "youtube" && (
            <iframe
              className="rounded-md w-full"
              src={getEnbedUrl(data.link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {data.tag[0] === "twitter" && <Tweet id={data.link} />}
          {data.tag[0] === "spotify" && (
            <iframe
              className="border-radius:12px"
              src={data.link}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md px-2 py-2 group border-[1px] bg-neutral-700/30 hover:bg-neutral-900/40 transition-all ease-in duration-300 border-dashed border-neutral-600 text-white">
      {children}
    </div>
  );
}
