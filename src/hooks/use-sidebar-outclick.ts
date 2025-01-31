"use client"
import { useEffect, useRef } from 'react';

export function UseOutsiteClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const HandelOusiteClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', HandelOusiteClick);
    return () => {
      document.removeEventListener('mousedown', HandelOusiteClick);
    };
  }, [callback]);
  return ref;
}
