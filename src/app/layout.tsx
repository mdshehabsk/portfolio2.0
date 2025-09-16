import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "MD SHEHAB UDDIN",
  description: "MD SHEAHB UDDIN PERSONAL PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
