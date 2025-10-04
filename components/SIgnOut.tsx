"use client"

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

interface SignOutButtonProps { 
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined; 
    ClassName?: string;
}

export default function SignOutButton({variant, ClassName}: SignOutButtonProps){ 

    return <Button className={ClassName} variant={variant} onClick={() => {
        signOut();
        redirect("/pages/signin");
    }}>Sign Out</Button>
}