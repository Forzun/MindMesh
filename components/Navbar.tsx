import Link from "next/link";
import { AnimatedThemeToggler } from "./DarkMode";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-4xl min-h-20 flex w-full mx-auto text-sm dark:text-neutral-300 px-2 top-5 text-neutral-600 rounded-lg dark:bg-neutral-900/35 bg-neutral-200/50 relative">
      <div className="flex w-full items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-semibold flex gap-2 items-center"
          >
            <Image
              className="dark:invert"
              src="https://files.svgcdn.io/solar/archive-up-minimlistic-bold-duotone.svg"
              alt={"Logo"}
              height="30"
              width="30"
            />
            MindMesh
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler />
          <Link href="/pages/signin">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Button size={"lg"} variant="default">
            <Link href="/pages/signin">Sign up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
