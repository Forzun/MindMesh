import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if(!session){ 
    return <p>No user received!</p>
  }
  
  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

  </div>
}

function RealHome(){
  const {data: session} = useSession()
  
  console.log(session);

  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
  </div>
}
