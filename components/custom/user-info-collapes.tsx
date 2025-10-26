"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Check, ChevronsUpDown, ContactRound, IdCard, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Session } from "next-auth";

export default function InfoCollaps({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full h-full justify-end pb-7 flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-md font-semibold flex items-center gap-1 text-neutral-200">
          {" "}
          <span>
            <ContactRound className="h-5 text-neutral-300" />
          </span>{" "}
          User Details
        </h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2">
        <span>
          <User className="w-6 h-6" />
        </span>
        {session?.user?.name || "Ops Something wrong"}
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2">
          {" "}
          <span>
            <IdCard />
          </span>
          {session?.user?.id || "You need to signin again"}
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2">
          {" "}
          <span>
            <Check />
          </span>
          Free plan
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
