"use client"
import { NavbarDataLinks } from '@constants/index';
import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuToggle] = useState<boolean>(false);
  const locationPath = usePathname();
  return (
    <>
      <header className="border-b border-b-hoverColor/10 bg-bodyColor sticky top-0 z-50">
        <Container className="py-5 flex items-center justify-between">
          {/* Logo data */}
          <Logo title="saiful islam" img="/saiful.png" />

          {/* Navbar data */}
          <nav className="hidden md:inline-flex tracking-wide items-center gap-x-6">
            {NavbarDataLinks?.map((links, i) => (
              <Link
                key={i}
                className={`${
                  locationPath === links?.href
                    ? 'text-lightSkey/90 before:w-full before:left-0'
                    : ''
                } text-[17px] AnimationEffect font-semibold capitalize`}
                href={links?.href}
              >
                {links?.title}
              </Link>
            ))}

            {/* resume pdf link */}

            <Link
              href={'/Resume_Of_MD_Saiful_islam.pdf'}
              target="_blank"
              rel="nonpener noreferrer"
              className=" border border-lightSkey/5 bg-bodyColor text-textColor text-sm   duration-300 ease-in-out transition-all btn-shadow hover:bg-hoverColor/40 px-7 py-[8px]  font-bold rounded-[6px]  "
            >
              Hire Me
            </Link>
          </nav>

          {/* menu button */}
          <button
            onClick={() => setMenuToggle((pre) => !pre)}
            className="md:hidden inline-flex"
          >
            <Menu className="text-base hover:text-lightSkey hoverEffect" />
          </button>
        </Container>

        <div className="md:hidden ">
          <Sidebar
            isOpen={isMenuOpen}
            locationPath={locationPath}
            onClose={() => setMenuToggle(false)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
