"use client"
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';

interface ErrorProps {
  error: Error;
  rest: () => void;
}

const ErrorPage: FC<ErrorProps> = ({ error, rest }) => {
  return (
    <>
      <section>
        <Container className="flex items-center gap-y-4 flex-col justify-center h-[80vh]">
          <h1 className="text-softOrange/90">Error 404</h1>
          <p className='text-sm md:text-base text-textColor/90 font-normal'>{error.message}</p>
          <Button
            className="bg-bodyColor border border-lightSkey/5   text-textColor text-sm  duration-300 ease-in-out transition-all hover:bg-hoverColor/40 btn-shadow font-bold rounded-[6px] "
            onClick={rest}
          >
            Rest-page
          </Button>
        </Container>
      </section>
    </>
  );
};

export default ErrorPage;
