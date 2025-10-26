import SignOutButton from "@/components/SIgnOut";
import InfoCollaps from "@/components/custom/user-info-collapes";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession} from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function UserInfoPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="h-screen w-full bg-neutral-950 ">
      <div className="h-full container mx-auto max-w-6xl">
        <div className="w-full h-full flex flex-col gap-5 items-center">
          <div className="md:h-96 h-90 w-full flex md:flex-row flex-col">
            <div className="md:w-96 flex flex-col justify-end items-center ">
              <Avatar src="/freepik__adjust__54853.jpeg" alt="Avatar" />
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

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="md:w-30 md:h-30 w-20 h-20  object-cover rounded-full flex items-center justify-center">
      <Image
        priority={true}
        className="w-full h-full rounded-full"
        width={100}
        height={100}
        src={src}
        alt={alt}
      />
    </div>
  );
}
