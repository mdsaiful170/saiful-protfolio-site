'use client';
import { Container } from '@/components/Container';
import Homedescription from '@/components/Homedescription';
import Photo from '@/components/Photo';
import SocialMedia from '@/components/SocialMedia';
import Statuscount from '@/components/Statuscount';
import { Download } from 'lucide-react';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {/* about box */}
        <div className="flex items-center flex-col  md:items-start text-center md:text-start gap-6 md:gap-5 ">
          <div>
            <h3 className="font-JetBrains text-sm md:text-lg tracking-wide mb-2 text-textColor/90">
              Full Stack Developer|MERN & Next.js
            </h3>
            <h2 className="font-Garamond mb-2 text-3xl md:text-5xl tracking-wide capitalize  font-semibold  text-textColor/90 ">
              Hello I&apos;am
            </h2>
            <h1 className="font-bold   text-4xl text-textColor font-Pacifico   md:text-6xl tracking-[.2rem] my-1.5">
              MD Saiful Islam.
            </h1>
          </div>

          <div className="w-full h-[290px]   md:h-[220px] lg:h-[170px] relative ">
            <div className="absolute top-0 left-0 w-full h-full">
              <Homedescription />
            </div>
          </div>
          <a
            download
            href={'/Resume_Of_MD_Saiful_islam.pdf'}
            className="text-base text-textColor/80 inline-flex items-cente border border-lightSkey/5 gap-x-2 font-bold  bg-[#0c1810] shadow-[5px_5px_8px_#050a07,-5px_-5px_8px_#132619]  hover:bg-hoverColor/40   hoverEffect rounded-full  px-5 py-2  "
          >
            Download Cv <Download strokeWidth={3} className="w-4 h-4" />
          </a>
          <SocialMedia className="p-0 mt-0 mb-0" />
          <Statuscount />
        </div>

        {/* image box  */}
        <Photo />
      </Container>
    </>
  );
};

export default Homepage;
