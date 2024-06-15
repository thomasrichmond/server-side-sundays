import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

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
        <Analytics />
      </body>
    </html>
  );
}
