//stiar shokol deshin thakbe
"use client"
import { motion } from 'motion/react';

const StiarAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stiar = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={StiarAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: 'easeInOut',
          }}
          className="w-full h-full bg-textColor relative"
        />
      ))}
    </>
  );
};

export default Stiar;
