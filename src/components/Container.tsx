"use client"
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.5, ease: 'easeIn' },
      }}
      className={cn('max-w-6xl mx-auto px-4', className)}
    >
      {children}
    </motion.div>
  );
};
