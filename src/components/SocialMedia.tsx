"use client"
import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip';
import { Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const SocialLink = [
  {
    title: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    href: 'https://www.facebook.com/md.saiful.islam.272356',
  },
  {
    title: 'Linkedin',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/md-saiful-islam-2676b2245/',
  },
  {
    title: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/mdsaiful170',
  },
  {
    title: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://x.com/SaifulIslam170',
  },
  {
    title: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:saifulsylhet00@gmail.com', // 🔥 Replace with your actual email
  },
];

const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-x-3 mt-2 p-5', className)}>
        {SocialLink.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                target="_blank"
                className="p-2.5 rounded-full border text-textColor hoverEffect 
                  hover:bg-hoverColor/50   bg-[#0c1810] shadow-[5px_5px_8px_#050a07,-5px_-5px_8px_#132619] border-lightSkey/5"
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className="text-xs tracking-wide bg-lightSkey/40 
                                       backdrop-blur-xl rounded-[5px] border 
                                       border-lightSkey/10 text-textColor"
            >
              {link.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
