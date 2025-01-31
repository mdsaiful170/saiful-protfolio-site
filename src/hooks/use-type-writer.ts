"use client"

import { useEffect, useState } from 'react';
// text displayed animation and write animation system formar motion
export function useTypeWriter(text: string, speed: number = 50) {
  const [displayedText, setDsiplayedText] = useState<string>('');
  const [iscomplete, setComplate] = useState<boolean>(false);

  useEffect(() => {
    let i: number = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDsiplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setComplate(true); // set completion ok
      }
    }, speed);
    return () => clearInterval(timer); // timer kaj retrun korlam
  }, [speed, text]);

  return { displayedText, iscomplete }; // retrun korlam displayedtext and iscomplete
}
