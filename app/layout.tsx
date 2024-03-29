import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/model-icon.png" sizes="any" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
