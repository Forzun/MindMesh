"use client";

import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import axios from "axios";
import Card from "@/components/Card";

export default function Dashboard() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  if (session == null) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen w-full">
      <Content />
    </div>
  );
}

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getcontent")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-fit w-full grid grid-cols-1 md:grid-cols-5 gap-10 md:pl-5 pl-12 pt-10 rounded-tl-2xl">
      {data.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </div>
  );
};
