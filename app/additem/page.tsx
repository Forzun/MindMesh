import NewItem from "@/components/NewItem";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function AddItem(){ 
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id

    return <div>
        <NewItem userId={userId} />
    </div>
}

 