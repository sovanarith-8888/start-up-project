'use client';
import Image from "next/image";
import  { svgRepo }  from "@/components/icons/svgrepo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <svgRepo.Bell/>
    </main>
  );
}
