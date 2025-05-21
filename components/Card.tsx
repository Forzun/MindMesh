"use client"; 

import { useEffect, useState } from "react";
import { Share2, Trash2} from "lucide-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { Tweet } from "react-tweet";

export default function Card() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=syFZfO_wfMQ&ab_channel=OneDirectionVEVO");

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
    const videoId = url.split('v=')[1]?.split('&')[0]; 
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
      <div className="bg-white dark:bg-neutral-900  rounded-xl max-w-80 w-full h-fit border px-3 py-3 hover:scale-105 transition-normal duration-200 delay-75 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="flex flex-col w-full h-full gap-2">
            <div className="flex items-center justify-between">

                    <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
                        <span>
                          <IconBrandYoutube className="hover:text-neutral-400 transition-all duration-200 delay-75 hover:scale-105 "/>
                        </span>
                        <h1 className="hover:text-neutral-400 transition-all duration-200">Study with me until i sleep</h1>
                    </div>

                    <div className="flex gap-2 ">
                        <a href="https://x.com/redcatgirls/status/1923973218320384088">
                          <Share2 className="hover:text-neutral-400 transition-all duration-150 cursor-pointer hover:scale-110" width={20} height={20} />
                        </a>
                        <Trash2 className="hover:text-neutral-400 transition-all duration-150 cursor-pointer hover:scale-110" width={20} height={20} />
                    </div>
            </div>

            <div data-theme="light" className="">
               <Tweet  id="1923973218320384088" />
            {/* <iframe className="rounded-md w-full" src={getEnbedUrl(url)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            </div>
        </div>
        {/*https://www.youtube.com/embed/J9K_mTjQC1M/si=vslKNITJJ_n1sk4X */}
      </div>
  );  
}
