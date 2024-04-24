"use client";
import Link from "next/link";
import routes from "../content/routes";
import GetIsMobile from "./is-mobile";
import pathStore from "@/utils/store";
import { usePathname } from "next/navigation";

export default function Header() {
  const isMobile = GetIsMobile();
  const setNextPath = pathStore((state) => state.setNextPath);
  const path = usePathname();

  if (path == "/") {
    return;
  } else {
    if (isMobile) {
      return (
        <div className="sticky top-0 z-20 flex w-full items-center justify-center  gap-8 bg-black p-4 text-lg ">
          <Link
            className="text-indigo-200"
            href={"/"}
            onClick={() => {
              setNextPath("/");
            }}
          >
            Home
          </Link>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center gap-8 p-4 text-lg ">
          {routes.map((route) => (
            <Link
              className="text-indigo-200 "
              key={route}
              href={route === "Home" ? "/" : `/${route.toLowerCase()}`}
            >
              {route}
            </Link>
          ))}
        </div>
      );
    }
  }
}
