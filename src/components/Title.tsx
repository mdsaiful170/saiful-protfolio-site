"use client"
import { cn } from '@/lib/utils';
import React, { FC, ReactNode } from 'react';

interface propsType {
  children: ReactNode;
  className?: string;
}
export const Title: FC<propsType> = ({ children, className }) => {
  return (
    <>
      <h2
        className={cn(
          'text-2xl md:text-4xl text-center font-Pacifico font-normal text-textColor pb-5 md:pb-6 ',
          className
        )}
      >
        {children}
      </h2>
    </>
  );
};
