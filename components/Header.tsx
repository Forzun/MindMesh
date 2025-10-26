import { ArrowUpRight, LogIn, Snowflake } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedShinyText } from "./ShinyText";
import Link from "next/link";

export default function Heror() {
  return (
    <div className="mt-15 flex flex-col items-center">
      <div className="w-[900px] max-[1000px]:w-full max-md:w-full max-md:leading-12 leading-15 font-medium text-center whitespace-pre-line pt-20">
        <h1 className="text-5xl max-md:text-4xl text-center">
          Capture everything that matters — ideas, links, tweets, videos, and
          notes — all in one place.
        </h1>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-5">
          <Button size="lg" variant="default">
            {" "}
            <span>
              <LogIn />{" "}
            </span>
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button size="lg" variant="outline">
            {" "}
            <span>
              <Snowflake />
            </span>
            <hr className="mx-1 h-4 w-px shrink-0 bg-neutral-50" />
            Start today for free
          </Button>
        </div>
      </div>
      <AnimatedShinyText className="flex gap-1 ">
        <p>Organize. Reflect. Grow</p> <ArrowUpRight className="w-5 h-5" />
      </AnimatedShinyText>
    </div>
  );
}
