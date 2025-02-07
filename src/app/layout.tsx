import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import {SocketProvider} from "@/contexts/socket-context"

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
        {/* <SocketProvider> */}
          {children}
        {/* </SocketProvider> */}
      </body>
    </html>
  );
}
