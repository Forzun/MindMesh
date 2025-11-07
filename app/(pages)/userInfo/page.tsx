import { SignOutButton } from "@/components/SIgnOut";
import InfoCollaps from "@/components/custom/user-info-collapes";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession} from "next-auth";
import { redirect } from "next/navigation";

export default async function UserInfoPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if(session?.user.name == undefined){ 
    return null
  }

  return (
    <div className="h-screen w-full bg-neutral-950 ">
      <div className="h-full container mx-auto max-w-6xl">
        <div className="w-full h-full flex flex-col gap-5 items-center">
          <div className="md:h-96 h-90 w-full flex md:flex-row flex-col">
            <div className="md:w-96 flex flex-col justify-end items-center ">
              <Avatar name={session?.user.name}/>
              <div className="md:h-10 h-40 w-full flex md:gap-10 gap-5 md:flex-row flex-col p-10">
                <div className="h-full flex">
                  <Button className="w-full" variant="outline">
                    Share
                  </Button>
                </div>
                <div className="h-full flex cursor-pointer">
                  <SignOutButton variant="destructive" />
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col px-20">
              <InfoCollaps session={session}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({name}: {name : string}) {
  return (
    <div className="md:w-30 md:h-30 w-20 h-20  object-cover rounded-full bg-neutral-800 flex items-center justify-center border">
        <p className="text-3xl ">{name[0] + name[name.length -1]}</p>
    </div>
  );
}
