"use client";

import { useEffect } from "react";
import { Share2, Trash2 } from "lucide-react";
import { IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { Tweet } from "react-tweet";

interface CardProps {
  id: number;
  link: string;
  tag: string[];
  title: string;
  userId: number;
}

export default function Card({ data }: { data: CardProps }) {
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

  return (
    <div className="bg-white dark:bg-neutral-900  rounded-xl max-w-80 w-full h-fit border px-3 py-3 hover:scale-105 transition-normal duration-200 delay-75 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="flex flex-col w-full h-full gap-2">
        <div className="flex items-center justify-between">
          <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
            <span>
              {data.tag[0] === "youtube" ? (
                <IconBrandYoutube className="hover:text-neutral-400 transition-all duration-200 delay-75 hover:scale-105 " />
              ) : (
                <IconBrandTwitter className="hover:text-neutral-400 transition-all duration-200 delay-75 hover:scale-105 " />
              )}
              {/* <IconBrandYoutube className="hover:text-neutral-400 transition-all duration-200 delay-75 hover:scale-105 "/> */}
            </span>
            <h1 className="hover:text-neutral-400 transition-all duration-200">
              {data.title}
            </h1>
          </div>

          <div className="flex gap-2 ">
            <a href={data.link}>
              <Share2
                className="hover:text-neutral-400 transition-all duration-150 cursor-pointer hover:scale-110"
                width={20}
                height={20}
              />
            </a>
            <Trash2
              className="hover:text-neutral-400 transition-all duration-150 cursor-pointer hover:scale-110"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div data-theme="light" className="">
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
