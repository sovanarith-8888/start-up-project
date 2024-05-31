import { Inter,Suwannaphum } from "next/font/google"

export const inter = Inter({
  weight: ['300','400','500','500'],
  subsets: ["latin"],
  display: "swap", // swap means font will be displayed immedialety
  variable: "--font-inter"
});

export const suwannaphum = Suwannaphum({
  weight: ["400", "700"],
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-suwannaphum"
});