import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import cn  from "./lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vector Tracking System",
  description: "Portal de pesquisa sobre Vetores no ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "grainy min-h-screen font-sans antialiased",
          inter.className,
        )}
      >
        
        <Navbar />
        {children}
        

      </body>
    </html>
  );
}
