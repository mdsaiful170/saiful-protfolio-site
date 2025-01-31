"use client"
import { Container } from '@/components/Container';
import { Iconanimationbox } from '@/components/Iconanimationbox';
import { Title } from '@/components/Title';
import { ServiceProviderData } from '@constants/index';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const Servicepage = () => {
  return (
    <>
      <section className="py-5 md:py-8 min-h-[80vh]">
        <Container>
          <Title className='md:pb-0'>Services I Provide</Title>
          <Iconanimationbox />
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 py-2">
            {ServiceProviderData?.map((res) => (
              <div
                key={res.id}
                className="flex flex-col gap-y-3 p-4 hover:rounded-shadow  duration-300 transition-all ease-linear !rounded-lg  box-shadow-1 bg-lightSkey/5 hover:border-lightSkey/5 hoverEffect  group/box cursor-pointer "
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-stroke group-hover/box:text-stroke-hover text-4xl md:text-5xl font-extrabold font-JetBrains text-transparent hoverEffect">
                    {res?.id}
                  </h3>
                  <Link href={res.href}>
                    <ArrowUp className="w-6 h-6 group-hover/box:text-lightSkey/90 rotate-45" />
                  </Link>
                </div>
                <h4 className="text-base md:text-lg font-medium  text-textColor tracking-tighter">
                  {res?.title}
                </h4>
                <p className="text-sm md:text-base  font-normal tracking-tighter text-textColor/80">
                  {res?.description}
                </p>
                <div className="max-w-full h-[1px] bg-textColor/20 mt-2"></div>
              </div>
            ))}
          </div>
          
        </Container>
      </section>
    </>
  );
};

export default Servicepage;
