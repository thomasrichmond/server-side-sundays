import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Server Side Sundays",
  description: "Blogs by Tom Richmond, written on Sundays!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="max-w-4xl mx-auto py-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
