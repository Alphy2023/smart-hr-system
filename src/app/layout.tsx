import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({subsets: ["latin"]})


export const metadata: Metadata = {
  title: {
    template: "%s | Smarthr System", 
    absolute: "Smarthr System",
  },
  description: "The Best HR Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
