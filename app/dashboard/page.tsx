"use client"

import SideBar from "@/components/SideBar";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import NewItem from "@/components/NewItem";

export default function Dashboard(){
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => { 
        getSession().then(session  => {
            setSession(session);
            console.log(session)
            if(session == null){
                redirect("/pages/signin")
            }
        })
    }, [])

    return <div className="h-screen w-full">
        <div className="">
            {/* <SideBar session={session} /> */}
            <NewItem userId={session?.user?.id} />
        </div>
    </div>
}   

