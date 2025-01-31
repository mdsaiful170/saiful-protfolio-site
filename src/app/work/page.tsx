"use client"
import { Container } from '@/components/Container';
import { Title } from '@/components/Title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HeroParallax } from '@/components/ui/hero-parallaxbox';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { worksData } from '@constants/index';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Workpage = () => {
  return (
    <>
      <section className="py-5 md:py-8">
        <Container className="mb-1">
          <Title className='md:pb-8'>MyWorks</Title>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full   md:pb-8"
          >
            <CarouselContent>
              {worksData?.map((res, i) => (
                <CarouselItem key={i}>
                  <Card className="bg-bodyColor group/box border-lightSkey/5 p-1 shadow-[7px_7px_14px_#0a130d,_-7px_-7px_14px_#0e1d13]  m-1">
                    <CardContent className="p-6">
                      {/* project description */}
                      <div className="flex items-start gap-5 md:gap-x-8 gap-y-6 md:justify-center flex-col md:flex-row">
                        <div className="order-2 space-y-5 md:order-1 w-full md:w-1/2 ">
                          <div>
                            <h3 className="text-stroke group-hover/box:text-stroke-hover text-4xl md:text-6xl font-extrabold font-JetBrains text-transparent hoverEffect">
                              {res?.id}
                            </h3>
                            <h4 className="text-lg pt-2 md:text-2xl font-medium  text-textColor tracking-tighter">
                              {res?.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {res?.technology?.map((res, i) => (
                              <Badge
                                key={i}
                                className="px-4 py-1 basis-auto hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm md:text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                              >
                                {res}
                              </Badge>
                            ))}
                          </div>
                          <div className="py-4">
                            <Separator className=" box-shadow-1 bg-bodyColor h-0.5 border-t border-lightSkey/15" />
                          </div>
                          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={res?.livelink} target="_blank">
                                    <Button
                                      variant={'outline'}
                                      size={'icon'}
                                      className="p-2.5 flex w-full  rounded-md border text-textColor hoverEffect hover:text-textColor
                                      hover:bg-hoverColor/50   bg-[#0c1810] btn-shadow border-lightSkey/5"
                                    >
                                      <span className="tracking-wide text-sm">
                                        LiveLik
                                      </span>
                                      <ArrowUpRight
                                        className="text-textColor w-5 h-5"
                                        strokeWidth={3}
                                      />
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                  className="text-xs tracking-wide ms-10 md:ms-20 -mt-10 bg-lightSkey/40 
                                       backdrop-blur-xl rounded-[5px] border 
                                       border-lightSkey/10 text-textColor"
                                >
                                  View Live Project
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={res?.githublink} target="_blank">
                                    <Button
                                      variant={'outline'}
                                      size={'icon'}
                                      className="p-2.5 flex w-full  rounded-md border text-textColor hoverEffect hover:text-textColor
                                      hover:bg-hoverColor/50   bg-[#0c1810] btn-shadow border-lightSkey/5"
                                    >
                                      <span className="tracking-wide text-sm">
                                        GitHub_Link
                                      </span>
                                      <Github
                                        className="text-textColor w-5 h-5"
                                        strokeWidth={3}
                                      />
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                  className="text-xs tracking-wide ms-10 md:ms-20 -mt-10 bg-lightSkey/40 
                                       backdrop-blur-xl rounded-[5px] border 
                                       border-lightSkey/10 text-textColor"
                                >
                                  View Live Project
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                        {/* project img */}
                        <div className="w-full  md:w-1/2 order-1 md:order-2 h-[240px] md:h-[350px] relative overflow-hidden group">
                          <Image
                            src={res?.image}
                            className="rounded-md w-full h-full object-cover object-top  "
                            alt="Responsive Image"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute w-full md:w-auto  top-[60%] md:bottom-0 md:right-5 md:top-full ">
              <CarouselPrevious className="bg-bodyColor border border-lightSkey/5 btn-shadow  md:w-10  md:h-10 p-4 hover:bg-lightSkey/45 hover:text-textColor  absolute -left-2 md:-left-24  " />
              <CarouselNext className="bg-bodyColor border border-lightSkey/5 btn-shadow text-base hover:bg-lightSkey/45 hover:text-textColor  md:w-10  md:h-10 p-4  absolute -right-2 " />
            </div>
          </Carousel>
        </Container>
        <div className="md:mt-8">
          <HeroParallax products={worksData} />
        </div>
      </section>
    </>
  );
};

export default Workpage;
