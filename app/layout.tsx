import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

export const metadata: Metadata = {
  title: "Travel Blog",
  description: "A travel blog built with Next.js and MDX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
