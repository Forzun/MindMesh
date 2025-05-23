import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
export default function SignOutButton(){ 

    return <button onClick={() => {
        signOut();
        redirect("/pages/signin")
    }}>Sign Out</button>
}