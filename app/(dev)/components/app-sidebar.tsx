"use client";

import { LifeBuoy, Send } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/text-sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { useEffect, useRef, useState } from "react";
import { Session } from "next-auth";
import { NavUser } from "./nav-user";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import MapContent from "@/lib/utils/mapContent";
import ThemeToggle from "@/components/theme-toggle";

const data = {
  user: {
    name: "user",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Youtube",
      url: "#",
      icon: (
        <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <g fill="none">
            <path
              fill="#8fbffa"
              fillRule="evenodd"
              d="M7 1.552c-1.065 0-2.105.078-3.106.17C2.227 1.871.84 3.18.642 4.857C.562 5.55.5 6.266.5 7s.062 1.45.142 2.142c.197 1.677 1.585 2.985 3.252 3.137c1.001.09 2.041.169 3.106.169s2.105-.078 3.105-.17c1.668-.15 3.056-1.459 3.252-3.136c.082-.692.143-1.408.143-2.142s-.062-1.45-.143-2.142c-.196-1.677-1.584-2.985-3.252-3.137c-1-.09-2.04-.169-3.105-.169"
              clipRule="evenodd"
            />
            <path
              fill="#2859c5"
              d="M6.286 9.643c1.4-.738 3.348-1.9 3.348-2.643c0-.744-1.949-1.905-3.348-2.643c-.644-.34-1.395.137-1.395.866v3.554c0 .73.75 1.206 1.395.866"
            />
          </g>
        </svg>
      ),
      isActive: false,
      items: [
        {
          title: "",
          url: "#",
        },
      ],
    },
    {
      title: "Twitter",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 12 12"
        >
          <path
            fill="#525151"
            d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z"
          />
        </svg>
      ),
      items: [
        {
          title: "",
          url: "#",
        },
      ],
    },
    {
      title: "spotify",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 256 256"
        >
          <path
            fill="#1ED760"
            d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
          />
        </svg>
      ),
      items: [
        {
          title: "",
          url: "#",
        },
      ],
    },
    {
      title: "Reddit",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 256 256"
        >
          <circle cx="128" cy="128" r="128" fill="#FF4500" />
          <path
            fill="#FFF"
            d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.598 33.598 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35.29 35.29 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093ZM85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278Zm74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782c8.699 0 21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883Zm-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275Z"
          />
        </svg>
      ),

      items: [
        {
          title: "",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [session, setSession] = useState<Session | null>(null);
  const { data: content, loading } = useFetch({ url: "/api/getcontent" });
  const hasProcessed = useRef<boolean>(false);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);

      if (session == null) {
        redirect("/signin");
      }
    });

    if (!loading && content && !hasProcessed.current) {
      hasProcessed.current = true;

      MapContent({ content, data: { navMain: data.navMain } });
      console.log("should run only once!..");
    }
  }, [loading, content]);

  return (
    <Sidebar className="" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    className="dark:invert"
                    src="https://files.svgcdn.io/solar/archive-up-minimlistic-bold-duotone.svg"
                    alt={"Logo"}
                    height="30"
                    width="30"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">MindMesh</span>
                  <span className="truncate text-xs">v.0.1</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain loading={loading} items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <span className="w-full pl-3">
        <ThemeToggle />
      </span>
      <SidebarFooter>
        <NavUser
          user={{
            id: session?.user.id || "",
            name: session?.user.name || undefined,
            email: session?.user.username || undefined,
            avatar: session?.user.image || undefined,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
