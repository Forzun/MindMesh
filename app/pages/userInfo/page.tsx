import SignOutButton from "@/components/SIgnOut"
import { Button } from "@/components/ui/button"
import { authOptions } from "@/lib/auth"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { Check, ChevronsUpDown, ContactRound, IdCard, User } from "lucide-react"
import { getServerSession, Session } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function UserInfoPage(){ 
    const session = await getServerSession(authOptions);

    if(!session){ 
        redirect("/pages/signin")
    }  

    return <div className="h-screen w-full bg-neutral-950 ">
        <div className="h-full container mx-auto max-w-6xl">
            <div className="w-full h-full flex flex-col gap-5 items-center">
                <div className="md:h-96 h-90 w-full flex md:flex-row flex-col">
                    <div className="md:w-96 flex flex-col justify-end items-center"> 
                        <Avatar src="/freepik__adjust__54853.jpeg" alt="Avatar" />

                            <div className="md:h-10 h-40 w-full flex md:gap-10 gap-5 md:flex-row flex-col p-10">
                                <div className="h-full flex">
                                    <Button className="w-full" variant="outline" >Share</Button>
                                </div>
                                <div className="h-full flex">
                                    <SignOutButton variant="destructive"  />
                                </div>
                         </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center px-20">
                        <InfoCollaps session={session} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Avatar({src, alt}: {src: string ,alt: string}){ 

    return <div className="md:w-30 md:h-30 w-20 h-20  object-cover rounded-full flex items-center justify-center">
            <Image priority={true} className="w-full h-full rounded-full" width={100} height={100} src={src} alt={alt} />
    </div>
}

function InfoCollaps({session}: { session: Session | null }){
    
    console.log(session);

    return <Collapsible className="flex w-full h-full justify-center flex-col gap-2">
        <div className="flex items-center justify-between">
            <h1 className="text-md font-semibold flex items-center gap-1 text-neutral-200"> <span><ContactRound className="h-5 text-neutral-300" /></span> User Details</h1>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8" >
                    <ChevronsUpDown /> 
                    <span className="sr-only">Toggle</span>
                </Button>
            </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2">
            <span><User className="w-6 h-6" /></span>{session?.user?.name || "Ops Something wrong"}
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2"> <span><IdCard /></span>{session?.user?.id  || "You need to signin again"}</div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm flex items-center gap-2"> <span><Check /></span>Free plan</div>
        </CollapsibleContent>
    </Collapsible>
}




