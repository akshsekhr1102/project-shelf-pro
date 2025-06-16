import Navbar from '@/components/custom/home/navbar';
import React, { ReactNode } from 'react';

export default function layout({children}:{children: ReactNode}) {
  return (
    <>
        <Navbar />
      {children}
    </>
  );
}
