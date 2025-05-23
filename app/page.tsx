import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const getUserDetails = async () => { 
  const session = await getServerSession(authOptions);
  return session;
}

export default async function Home(){ 
  const session = await getUserDetails(); 
  console.log(session);

  if(!session){ 
    redirect("/pages/signin");
  }else{ 
    redirect("/dashboard")
  }

  return <div className="h-screen w-full flex items-center justify-center">
    
  </div>
}
