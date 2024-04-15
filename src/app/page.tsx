"use client";
import Fireflies from "@/components/fireflies";
import routes from "../content/routes";
import Link from "next/link";
import getIsMobile from "@/utils/is-mobile";

export default function Home() {
  const isMobile = getIsMobile();
  return (
    <main className="flex justify-center h-screen">
      <div className="h-screen flex flex-col justify-center gap-2">
        <div className="w-full flex justify-center align-middle font-normal text-4xl">
          Luke Anthony
        </div>
        <div
          className={
            `p-4 flex items-center justify-center text-lg ` +
            (isMobile ? "flex-col gap-4" : "gap-8")
          }
        >
          {routes.map((route) => (
            <Link
              key={route}
              href={route === "Home" ? "/" : `/${route.toLowerCase()}`}
            >
              {route}
            </Link>
          ))}
        </div>
        <Fireflies />
      </div>
    </main>
  );
}
