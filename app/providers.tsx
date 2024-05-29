'use client';

import {NextUIProvider} from '@nextui-org/react';
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> animation

export function Providers({children}: {children: React.ReactNode}){
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}