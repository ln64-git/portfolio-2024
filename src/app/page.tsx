"use client";
import routes from "../content/routes";
import Link from "next/link";
import GetIsMobile from "@/components/is-mobile";
import pathStore from "@/utils/store";

export default function Home() {
  const isMobile = GetIsMobile();
  const setNextPath = pathStore((state) => state.setNextPath);

  return (
    <div className="flex h-screen justify-center ">
      <div className="flex h-screen flex-col justify-center gap-2">
        <div className="flex w-full justify-center align-middle text-4xl font-normal text-purple-200">
          Luke Anthony
        </div>
        <div
          className={
            `flex items-center justify-center p-4 text-lg ` +
            (isMobile ? "flex-col gap-4" : "gap-8")
          }
        >
          {routes.map((route) => (
            <Link
              className="text-indigo-200"
              key={route}
              href={route === "Home" ? "/" : `/${route.toLowerCase()}`}
            >
              {route}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
