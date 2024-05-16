import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header'
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "NextScene",
  description: "Site feito usando TypeScript, Next.js, Tailwind CSS, The Movie Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pl-7 pr-7 {inter.className}"> 
        <Providers>
          <Header />
          <SearchBox />
          {children}
        </Providers>
        </body>
    </html>
  );
}
  
