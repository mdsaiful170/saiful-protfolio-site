"use client"
import Contactfrom from '@/components/Contactfrom';
import { Container } from '@/components/Container';
import { Title } from '@/components/Title';
import { Mail, MapPinCheck, Phone } from 'lucide-react';

const DetailsData = [
  { title: 'Phone', description: '(+8801777400170)', icon: <Phone /> },
  { title: 'Email', description: 'saifulsylhet00@gmail.com', icon: <Mail /> },
  {
    title: 'Address',
    description: 'Bangladesh, sylhet-chiknagoul (3152)',
    icon: <MapPinCheck />,
  },
];

const Contactpage = () => {
  return (
    <>
      <section className='py-5 md:py-10'>
        <Container>
          <Title className='md:pb-10'>Contact From</Title>
          
          <div className="flex items-start gap-6 md:gap-14 flex-col md:flex-row justify-center overflow-hidden">
            {/* from */}
            <div className="w-full md:w-2/3 space-y-4">
            <Contactfrom />
            </div>

            {/* details */}
            <div className="w-full md:w-1/3 flex items-start  justify-center flex-col gap-4 md:gap-8">
              {DetailsData?.map((res, i) => (
                <div key={i} className="flex items-center gap-x-4">
                  <span className="p-4 box-shadow border border-textColor/5 rounded-md  text-base font-bold">
                    {res?.icon}
                  </span>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold font-JetBrains text-textColor/90">
                      {res?.title}
                    </h3>
                    <p className="text-sm tracking-tight font-medium font-JetBrains text-textColor/70 pt-1.5">
                      {res?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contactpage;
