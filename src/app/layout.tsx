import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}> 
        <Providers>
          <Header />
          {children}
        </Providers>
        </body>
    </html>
  );
}
  
