import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Enter your login credentials securely to access your account and explore our platforms features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <head>
        <link rel="icon" href="favicon.svg" sizes="32x32" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
