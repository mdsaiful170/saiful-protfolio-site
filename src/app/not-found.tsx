'use client';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <section>
        <Container className="flex items-center flex-col justify-center gap-y-4 h-[80vh] ">
          <h1 className="text-softOrange/90 ">404 - Page Not Found</h1>
          <p className='text-sm md:text-base text-textColor/90'>Sorry, the page you are looking for does not exist.</p>

          <Link href={'/'}>
            <Button className=" border bg-bodyColor border-lightSkey/5 btn-shadow   text-textColor text-sm  duration-300 ease-in-out transition-all hover:bg-hoverColor/40  font-bold rounded-[6px] ">
              Go Back Home
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
