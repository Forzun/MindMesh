"use client";

import { LoginForm } from "@/components/Signup-form";

export default function LoginPage() {

  return (
    <div className="flex items-center justify-center h-screen text-black">
      <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden rounded-xl w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
