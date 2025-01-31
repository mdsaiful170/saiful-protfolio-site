//akhn theke shocl page Transition hobe
"use client"
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: FC<PageProps> = ({ children, className }) => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence>
        <div key={pathname} className={cn('', className)}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
            }}
            className="w-screen h-screen fixed top-0 bg-bodyColor pointer-events-none"
          ></motion.div>
          {children}
        </div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
