"use client";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { Brain } from "lucide-react";
import {
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandSpotify,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import axios from "axios";
import Card from "./Card";
import { DropDownMenu } from "./DropDown";
import Link from "next/link";

export default function SideBar({ session }: { session: Session | null }) {
  const Links = [
    {
      label: "Youtube",
      href: "#",
      icon: <IconBrandYoutube />,
    },
    {
      label: "Twitter",
      href: "#",
      icon: <IconBrandTwitter />,
    },
    {
      label: "Spotify",
      href: "#",
      icon: <IconBrandSpotify />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "h-screen mx-auto flex w-full sticky flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <div className=" z-10">
        <Sidebar open={open} setOpen={setOpen} animate={false}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden">
              <div className="flex items-center gap-2">
                <Brain className="w-7 h-9" />
                <Link href="/" className="text-xl font-semibold">
                  MindMesh
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                {Links.map((link, index) => (
                  <SidebarLink key={index} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: session?.user?.name || " ",
                  href: "#",
                  icon: <DropDownMenu />,
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
      <div className="sticky top-0 overflow-auto overflow-x-hidden flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api/getcontent")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-1 h-full justify-center">
      <div className="min-h-fit w-full grid grid-cols-1 md:grid-cols-5 gap-10 md:pl-5 pl-12 pt-10 rounded-tl-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 ">
        {data.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    </div>
  );
};
