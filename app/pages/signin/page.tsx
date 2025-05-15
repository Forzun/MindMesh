"use client"

import { signIn } from 'next-auth/react';
export default function LoginPage() {

  return (
    <div className="flex items-center justify-center h-screen bg-white text-black">
      <form
        onSubmit={async (e) => { 
            e.preventDefault(); 
            const form = e.currentTarget; 

            const user = { 
                username:(form.elements.namedItem("username") as HTMLInputElement).value, 
                name:(form.elements.namedItem("name") as HTMLInputElement).value,
                password:(form.elements.namedItem("password") as HTMLInputElement).value
            }
 
            if(user){
            await signIn("credentials", { 
              name:user.name, 
              username:user.username,
              password:user.password,
              callbackUrl: "/",
          })
            }

        }}
        className="bg-white p-8 shadow-md rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <input
          name="username"
          type="text"
          placeholder="username"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          name="name"
          type="text"
          placeholder="name"
          className="w-full p-2 mb-4 border rounded"
        />       
        <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
      />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}