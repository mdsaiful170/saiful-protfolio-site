"use client"
import { usePathname } from 'next/navigation';
import Stiar from './Stiar';
import { AnimatePresence } from 'motion/react';
// shkol transtion niye jabo
const StiarTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stiar />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StiarTransition;
