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
  const path = usePathname();
  return (
    <motion.div
      key={path}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
      <Fireflies />npm 
    </motion.div>
  );
}
