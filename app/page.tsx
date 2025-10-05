import Header from "@/components/Header";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getUserDetails = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export default async function Home() {
  const session = await getUserDetails();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="container-wrapper flex flex-col items-center">
      <Navbar />
      <Header />
      <LogoCloud />
    </div>
  );
}
