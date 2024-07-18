import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import trangleLogo from '@/public/logotriangle.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text animate-pulse`}>
        <div className="w-full mx-auto flex flex-col items-center p-5">
          <div className="flex flex-row items-center">
            <Image src={trangleLogo} className="w-10" alt='logo' />
            <div className="flex flex-col space-y-1 justify-between px-1">
              <h1 className="text-md font-semibold text-white">Transcrypto</h1>
              <p className="text-[10px] text-white">Any audio or video, we know all about it!</p>
            </div>
          </div>
          <div className="justify-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
