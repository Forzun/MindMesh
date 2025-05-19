import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


export default function Home(){ 
  
  return <div className="h-screen w-full ">
    <h1>Hello</h1>
  </div>
}
