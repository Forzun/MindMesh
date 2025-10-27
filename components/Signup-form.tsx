"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [formData, setFromData] = useState<SignupFormProps>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn("credentials", {
        name: formData.name,
        username: formData.email,
        password: formData.password,
        callbackUrl: "/dashboard",
      });
      redirect("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
    // const user: SignupFormProps = {};
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="">
        <CardHeader>
          <div className="flex gap-2 items-center ">
            <Image
              className="dark:invert"
              src="https://files.svgcdn.io/solar/archive-up-minimlistic-bold-duotone.svg"
              alt={"Logo"}
              height="50"
              width="50"
            />
          </div>
          <CardTitle className="text-2xl">Welcom to MiniDraw</CardTitle>
          <CardDescription>
            Please your email below to Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">name</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  required
                  className=""
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={handleChange}
                  required
                  className=""
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="***********"
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <hr />
                <Button disabled={loading} type="submit">
                  {loading ? (
                    <Loader className="animate-spin transition-all duration-500" />
                  ) : (
                    ""
                  )}
                  Sign in
                </Button>
                {error && <AlertDescription>{error}</AlertDescription>}
                {/* <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription> */}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-red-400 text-sm font-medium leading-none peer-disabled:text-muted-foreground/80 peer-disabled:pointer-events-none",
        className
      )}
    >
      <ul className="list-disc text-rose-400">
        <li>{props.children}</li>
      </ul>
    </div>
  );
}
