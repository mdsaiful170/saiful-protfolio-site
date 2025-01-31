"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
const Photo = () => {
  const circleColors = ['#00ff90', '#E0E0E090', '#FF572290'];
  const circleVariants = {
    initial: {
      strokeDasharray: '24 10 0 0',
      rotate: 0,
      opacity: 0,
    },
    animate: (index: number) => ({
      strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
      rotate: [120, 360],
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        },
        opacity: {
          duration: 0.4,
          delay: 2 + index * 0.4,
          ease: 'easeIn',
        },
      },
    }),
  };
  return (
    <>
      <div className="w-full h-full   flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1, duration: 0.8, ease: 'easeIn' },
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
            }}
            className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-[290px] h-[290px] lg:self-center self-start p-1 shadowbox overflow-hidden  lg:w-[400px] lg:h-[400px]    rounded-full relative">
              <Image
                src={'/saiful-pic.png'}
                className="object-contain w-full h-full"
                alt="img.png"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506 506"
            fill="none"
            className="w-[370px] height-[370px] lg:w-[515px] lg:h-[515px]"
          >
            {circleColors.map((color, index) => (
              <motion.circle
                key={index}
                cx={253}
                cy={253}
                r={240 - index * 15}
                strokeWidth={3}
                initial="initial"
                animate="animate"
                stroke={color}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                variants={circleVariants}
                custom={index}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </>
  );
};

export default Photo;
