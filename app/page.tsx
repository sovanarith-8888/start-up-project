'use client';
import Image from "next/image";
import  { svgRepo }  from "@/components/icons/svgrepo";

import {Button} from '@nextui-org/button'; 
import {uiBall} from '../components/animation/uiball';
import "@/app/globals.css"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me as UIBall</Button>
    </main>
  );
}
