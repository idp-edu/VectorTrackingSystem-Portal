import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import cn from "./lib/utils";
import "./styles/globals.css";

const brandon = localFont({
  src: [
    {
      path: "../../public/fonts/brandon_med-webfont.woff2",
      weight: "400",
    },
  ],
  variable: "--font-brandon",
});

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
    <html lang="pt" className="light">
      <body
        className={cn(
          "grainy antialiased",
          `${brandon.className} font-normal`,
        )}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-0 flex h-full w-full px-5	">
          <div className="relative h-full w-full border-x-2 border-dotted border-black/50" />
          <div className="relative h-full w-full border-r-2 border-dotted border-black/50" />
        </div>
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
