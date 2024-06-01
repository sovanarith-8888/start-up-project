import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { inter,suwannaphum } from "@/app/fonts";
import { DASHBOARD_META_DESCRIPTION } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Sabay Tinh",
  description: DASHBOARD_META_DESCRIPTION,
  openGraph: {
    title: "Saybay tinh nas",
    description: "You can buy everything want you want such as clothes shirt and more...",
    images: ["https://cdn2.hubspot.net/hubfs/53/ecommerce-1.png"]
  }
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
      <body className={` ${inter.variable}  ${suwannaphum.variable} `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
