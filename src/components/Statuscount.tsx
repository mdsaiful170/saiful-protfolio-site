"use client"
import { StatusData } from '@constants/index';
import CountUp from 'react-countup';
const Statuscount = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:flex items-start gap-4 flex-col md:flex-row">
        {StatusData?.map((status, i) => (
          <div
            key={i}
            className="flex flex-1 items-center flex-col md:flex-row  justify-center gap-2.5 lg:justify-start "
          >
            <CountUp
              duration={5}
              delay={2}
              end={status?.num}
              className="font-Pacifico  text-4xl md:text-6xl text-textColor/95 font-bold"
            />
            <p className="md:self-end text-sm max-w-[100px] text-textColor/80  leading-snug text-center lg:text-left">
              {status?.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statuscount;
