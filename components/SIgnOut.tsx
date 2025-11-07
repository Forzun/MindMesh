"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

interface SignOutButtonProps {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  ClassName?: string;
}

function SignOutButton({ ClassName }: SignOutButtonProps) {
  return (
    <Button
      variant={"destructive"}
      className={ClassName}
      onClick={() => {
        signOut();
        redirect("signin");
      }}
    >
      Sign Out
    </Button>
  );
}
function SignOutButtonClassic({ ClassName }: SignOutButtonProps) {
  return (
    <button
      className={ClassName}
      onClick={() => {
        signOut();
        redirect("signin");
      }}
    >
      Sign Out
    </button>
  );
}

export { SignOutButton, SignOutButtonClassic };



