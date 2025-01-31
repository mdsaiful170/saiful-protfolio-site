"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  title?: string;
  img?: string;
}

export const Logo = ({ className, title, img }: LogoProps) => {
  return (
    <Link href={'/'} className={cn('w-auto', className)}>
      {/* Image Component */}
      <h2 title={title}>
        <Image
          src={img || '/default-logo.png'} // fallback logo if img is not provided
          alt="logo_img"
          width={150} // fixed width, responsive based on max-width of parent container
          height={30} // fixed height
          className="object-cover  h-12 w-auto " // ensures that the image doesn't stretch
        />
      </h2>
    </Link>
  );
};
