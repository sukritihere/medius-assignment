"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStartPage = pathname === "/start";

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {!isStartPage && <Navbar />}
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
