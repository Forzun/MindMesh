import { SignOutButton } from "@/components/SIgnOut";
import InfoCollaps from "@/components/custom/user-info-collapes";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserInfoPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session?.user.name == undefined) {
    return null;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
        dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]
        bg-size-[16px_16px]"
      />

      <div className="relative h-full container mx-auto max-w-6xl">
        <div className="w-full h-full flex flex-col gap-5 items-center">
          <div className="md:h-96 h-90 w-full flex md:flex-row flex-col">
            <div className="md:w-96 flex flex-col justify-end items-center">
              <Avatar name={session.user.name} />
              <div className="md:h-10 h-40 w-full flex md:gap-10 gap-5 md:flex-row flex-col p-10">
                <div className="h-full flex">
                  <Button className="w-full" variant="outline">
                    Share
                  </Button>
                </div>
                <div className="h-full flex cursor-pointer">
                  <SignOutButton ClassName="bg-red-500/90" variant="destructive" />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col px-20">
              <InfoCollaps session={session} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name[0] + name[name.length - 1];

  return (
    <div className="md:w-30 md:h-30 w-20 h-20 rounded-full border bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
      <p className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
        {initials}
      </p>
    </div>
  );
}
