import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/NavBar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
