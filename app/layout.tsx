import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Lacsamana | Software Engineer",
  description: "AWS Certified Developer. Expert Google Searcher.",
  icons: [
    {
      rel: 'icon',
      url: 'https://personal-website-company-images.s3.us-west-1.amazonaws.com/MartinAvatarICON.png',
      sizes: '16x16', // Specify the size
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <link 
            rel="icon" 
            href="https://personal-website-company-images.s3.us-west-1.amazonaws.com/MartinAvatarICON.png" 
            sizes="any" // Allow any size to prevent stretching
          />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
