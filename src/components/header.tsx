"use client";
import Link from "next/link";
import routes from "../content/routes";
import getIsMobile from "../utils/is-mobile";
import { usePathname } from "next/navigation";
export default function Header() {
  const isMobile = getIsMobile();
  const path = usePathname();

  if (isMobile) {
    return (
      <div className="p-4 gap-8 flex items-center justify-center text-lg  sticky top-0 w-full bg-black z-20">
        <Link href="/">Home</Link>
      </div>
    );
  } else {
    return (
      <div className="p-4 gap-8 flex items-center justify-center text-lg ">
        {routes.map((route) => (
          <Link
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
