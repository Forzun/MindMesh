"use client";

import { useState } from "react";
import TwitterSvg from "./icons/x-svg";
import ShareIcon from "./icons/share-icon";
import DeleteIcon from "./icons/delete-icon";
import { RedditIcon, SpotifyIcon, YoutubeIcon } from "./icons/activitys-icons";
import { EmbedType, Renderer } from "./embeds";
import { toast } from "sonner";
import { Button } from "./ui/button";
import useDeleteContent from "@/hooks/useDeleteContent";
import { LoaderCircle } from "lucide-react";

interface CardProps {
  id: number;
  link: string;
  tag: EmbedType[];
  title: string;
  userId: number;
}

export default function Card({ data }: { data: CardProps }) {
  const [hidden, setHidden] = useState(true);
  const [loadingByAction, setLoadingByAction] = useState<
    Record<string, boolean>
  >({
    share: false,
    delete: false,
  });
  const { deleteContent, error } = useDeleteContent({
    onSuccess: () => {
      toast.success("Content deleted successfully");
      window.location.reload();
    },
    onError: () => {
      toast.error(error.message);
    },
  });

  function truncate(str: string, n: number) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  const handleDelete = async () => {
    try {
      setLoadingByAction((s) => ({ ...s, delete: true }));
      await deleteContent(data.id);
    } finally {
      setLoadingByAction((s) => ({ ...s, delete: false }));
    }
  };

  const handleShare = async () => {
    try {
      setLoadingByAction((s) => ({ ...s, share: true }));
    } finally {
      setLoadingByAction((s) => ({ ...s, share: false }));
    }
  };

  const action = [
    {
      id: 1,
      icon: <ShareIcon className="dark:text-neutral-300 text-neutral-900" />,
      onclick: handleShare,
    },
    {
      id: 2,
      icon: <DeleteIcon className="dark:text-neutral-400 text-neutral-600" />,
      onclick: handleDelete,
    },
  ];

  return (
    <div
      onClick={() => setHidden(!hidden)}
      className="bg-neutral-50 dark:bg-neutral-900  rounded-xl min-w-80 w-full h-fit border-1 border-dashed border-inset px-3 py-3 transition-normal duration-200 delay-75 dark:hover:inset-shadow-sm dark:hover:inset-shadow-neutral-800 transition-all ease-in shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="flex flex-col w-full h-full gap-2">
        <div className="flex items-center justify-between">
          <div className="flex text items-center cursor-pointer gap-2 text-neutral-700 tracking-tight dark:text-neutral-300 text-base">
            <span>
              {data.tag[0] === "youtube" ? <YoutubeIcon /> : <TwitterSvg />}
              {data.tag[0] === "spotify" && <SpotifyIcon />}
              {data.tag[0] === "reddit" && <RedditIcon />}
            </span>
            <div className="h-10"></div>
            <h1 className="hover:text-neutral-400 text-sm transition-all duration-200">
              {truncate(data.title, 45)}
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            {action.map((action) => (
              <Icon
                key={action.id}
                loading={loadingByAction[action.id] === true}
                onClick={action.onclick}
              >
                {action.icon}
              </Icon>
            ))}
          </div>
        </div>
        <div
          data-theme="light"
          className={`flex justify-center overflow-hidden transition-all duration-300 ease-in ${
            hidden ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
          }`}
        >
          <Renderer tag={data.tag[0]} url={data.link} />
        </div>
      </div>
    </div>
  );
}

function Icon({
  children,
  onClick,
  loading = false,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}) {
  return (
    <Button
      type="button"
      disabled={loading}
      onClick={onClick}
      className="rounded-md px-1 py-2 group border-[1px] bg-neutral-200/30 dark:bg-neutral-900 dark:hover:bg-neutral-800/30 hover:bg-neutral-100 transition-all ease-in duration-300 border-dashed dark:border-neutral-700/70 border-neutral-500/40 "
    >
      {loading ? (
        <LoaderCircle className="animate-spin transition-all duration-500" />
      ) : (
        children
      )}
    </Button>
  );
}
