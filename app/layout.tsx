import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Xuan Hoang Ha - Game Dev & Web Dev",
  description: "Portfolio of Xuan Hoang Ha - Game Developer and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
