
import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'bg-[#0c1810]  w-full box-shadow text-sm  font-medium font-JetBrains tracking-tight md:text-base   focus:border-lightSkey/15 focus:valid:border-lightSkey/15 placeholder:font-normal placeholder:text-sm placeholder:text-textColor/50 border border-textColor/5 px-3 py-2.5 rounded-md outline-none valid:border-lightSkey/15',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
