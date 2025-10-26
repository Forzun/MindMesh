"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

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

export default function SignOutButton({ ClassName }: SignOutButtonProps) {
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
