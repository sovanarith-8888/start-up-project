'use client';
import Image from "next/image";
import  { svgRepo }  from "@/components/icons/svgrepo";

import {Button} from '@nextui-org/button'; 
import "@/app/globals.css"
import {uiBall} from '@/components/animation/uiball';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me as UIBall</Button>
      <h1>ប្រទេសកម្មពូចា</h1>
    </main>
  );
}
