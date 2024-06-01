import type { Metadata } from "next";
import {inter, suwannaphum} from '@/app/fonts';
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { DASHBOARD_META_DESCRIPTION } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Administrator",
  description: DASHBOARD_META_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter.variable} ${suwannaphum.variable}`}>
        <Providers>
          {children}
        </Providers>
        <h1>welcome dashbaord</h1>
      </body>
    </html>
  );
}
