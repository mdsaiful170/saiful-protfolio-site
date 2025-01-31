'use client';
import { NavbarDataLinks } from '@constants/index';
import { X } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import SocialMedia from './SocialMedia';
import { UseOutsiteClick } from '@/hooks/use-sidebar-outclick'; // outsite click function component
import { LogoText } from './LogoText';

interface PropsType {
  isOpen: boolean;
  onClose: () => void;
  locationPath: string;
}

const Sidebar: FC<PropsType> = (props) => {
  const { isOpen, onClose, locationPath } = props || {};

  // Menu bar colse ousite click fucnotn
  const sideBarRef = UseOutsiteClick<HTMLDivElement>(onClose);
  return (
    <>
      <div
        ref={sideBarRef} // outsite click hander ref
        className={`fixed z-50 inset-y-0 right-0 bg-bodyColor border-l border-l-lightSkey/10 shadow-sm  shadow-lightSkey/20 min-w-72   transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } hoverEffect`}
      >
        <div className="flex items-center justify-end p-4 ">
          <button onClick={onClose}>
            <X className="text-base hover:text-lightSkey hoverEffect" />
          </button>
        </div>
        <nav className="inline-flex items-start flex-col gap-y-6 px-4 w-full">
          {/* <Logo title='saiful islam' img='/saiful.png' /> */}
          <LogoText
            className=" font-Pacifico font-medium"
            subtitle="."
            title="Md Saiful Islam"
          />

          {/* Sidebar links */}
          {NavbarDataLinks?.map((links, i) => (
            <Link
              key={i}
              className={`${
                locationPath === links?.href
                  ? 'text-lightSkey/90 before:w-full before:left-0'
                  : ''
              } text-base AnimationEffect `}
              href={links?.href}
            >
              {links?.title}
            </Link>
          ))}
          <Link
            href={'/Resume_Of_MD_Saiful_islam.pdf'}
            target="_blank"
            rel="nonpener noreferrer"
            className=" btn-shadow w-full text-center py-[8px] text-textColor text-sm  duration-300 ease-in-out transition-all hover:bg-hoverColor/40  font-bold rounded-[6px]  "
          >
            Hire Me
          </Link>
        </nav>

        <SocialMedia />
      </div>
    </>
  );
};

export default Sidebar;
