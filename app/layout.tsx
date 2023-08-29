import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Hanania Turizm",
  description: "Explore World with Hanania Turizm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} w-full`}>
        <main className="w-10/12 mx-auto my-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
