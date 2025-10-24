"use client";

import { useEffect } from "react";

export default function Test() {
  return (
    <div className="max-w-screen min-h-screen px-5">
      <Dashboard />
    </div>
  );
}

const Dashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  function truncate(str: string, n: number) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div className="flex flex-1 h-full justify-center">
      <div className="min-h-fit w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:pl-5 pl-12 pt-10">
        <div className="bg-white dark:bg-neutral-900 rounded-xl min-w-80 w-full h-fit border px-3 py-3 transition-normal duration-200 delay-75 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex flex-col w-full h-full gap-2">
            <div className="flex items-center justify-between">
              <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="#525151"
                      d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z"
                    />
                  </svg>
                </span>
                <div className="h-10 "></div>
                <h1 className="hover:text-neutral-400 transition-all duration-200 text-[14px]">
                  {truncate(
                    "Learn how to build a social media platform with Next.js",
                    45
                  )}
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" rounded-md px-2 py-2 border-[1px] bg-neutral-700/30 hover:bg-neutral-900/40 transition-all ease-in duration-300 border-dashed border-neutral-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    color="currentColor"
                    fill="none"
                    className="group cursor-pointer transition-transform duration-300 hover:scale-110"
                  >
                    <path
                      d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-80"
                    />
                    <path
                      d="M11.5 12.5L15 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-3"
                    />
                  </svg>
                </div>
                <div className="bg-neutral-100 rounded-md px-2 py-2 border-t-1 border-neutral-300 text-neutral-900/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    color="currentColor"
                    fill="none"
                  >
                    <path
                      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M9.5 12.5C9.99153 11.9943 11.2998 10 12 10M14.5 12.5C14.0085 11.9943 12.7002 10 12 10M12 10V18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* <div
              data-theme="light"
              className="flex justify-center overflow-hidden"
            >
              <blockquote
                className="twitter-tweet "
                data-theme="dark"
                style={{ transform: "scale(0.75)", transformOrigin: "center" }}
              >
                <p lang="en" dir="ltr">
                  building on solana{" "}
                  <a href="https://t.co/BQyv7QRK8c">
                    pic.twitter.com/BQyv7QRK8c
                  </a>
                </p>
                &mdash; Sarthak (@sarthaktwtt){" "}
                <a href="https://twitter.com/sarthaktwtt/status/1981774541719580710?ref_src=twsrc%5Etfw">
                  October 24, 2025
                </a>
              </blockquote>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
