import type { Metadata } from "next";
import { Space_Mono, VT323 } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retro Portfolio | Digital Journey",
  description: "A retro-styled digital portfolio journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} ${vt323.variable} antialiased bg-[#fdfbf7] text-[#111] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
