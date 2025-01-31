"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const LogoText = ({
  className,
  title,
  subtitle,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <>
      <Link href={'/'}>
        <h4
          className={cn(
            'text-2xl  group font-bold text-textColor hover:text-lightSkey hoverEffect',
            className
          )}
        >
          {title && title}
          <span className="text-lightSkey group-hover:text-textColor hoverEffect">
            {subtitle && subtitle}
          </span>
        </h4>
      </Link>
    </>
  );
};


