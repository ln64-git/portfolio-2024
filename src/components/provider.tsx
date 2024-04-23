// provider.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Fireflies from "./fireflies";
import { usePathname, useRouter } from "next/navigation";
import pathStore from "@/utils/store";
import { useEffect, useCallback } from "react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const nextPath = pathStore((state) => state.nextPath);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={nextPath} // Use nextPath as the key
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        
        onAnimationEnd={() => {
          router.push(nextPath);
        }}
      >
        {children}
        <Fireflies />
      </motion.div>
    </AnimatePresence>
  );
}
