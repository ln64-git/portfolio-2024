// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../utils/globals.css";
import Provider from "@/components/provider";
import Fireflies from "@/components/fireflies";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LukeAnthony007",
  description: "Luke Anthony - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Provider>{children}</Provider>
        <Fireflies />
      </body>
    </html>
  );
}
