"use client"

import { redirect } from "next/navigation";

interface RedirecItems { 
    children: React.ReactNode; 
    herf: string; 
}

export default function RedirectButton({children , herf}: RedirecItems){ 
   
    return <button onClick={() => redirect(herf)}>
        {children}
    </button>
}
