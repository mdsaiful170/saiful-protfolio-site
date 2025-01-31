"use client"

import { useTypeWriter } from '@/hooks/use-type-writer';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
const Homedescription = () => {
  const [loadaed, setladade] = useState<boolean>(false);
  const description =
    ' 🚀Full Stack Web Developer | Expert in Modern Web Technologies Skilled in JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, Material UI, Shadcn, and Next UI. I build dynamic, scalable, and high-performance web applications. Let&apos;s bring your ideas to life with cutting-edge technology!🔥';
  const { displayedText, iscomplete } = useTypeWriter(description, 30);
  useEffect(() => {
    setladade(true);
  }, []);
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-auto leading-7 text-sm min-h-30 font-normal mb-6 "
      >
        {loadaed ? (
          displayedText.split('').map((char, index) => (
            <motion.span
              initial={{ color: 'rgb(224 224 224 / 0.5)' }}
              animate={{
                color: iscomplete
                  ? 'rgb(224 2241 224)'
                  : 'rgb(224 224 224 / 0.5)',
              }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
           
              key={index}
            >
              {char}
            </motion.span>
          ))
        ) : (
          <span className="text-textColor/50 text-sm md:text-base font-medium text-justify ">
            {description}
          </span>
        )}
      </motion.p>
    </>
  );
};

export default Homedescription;
