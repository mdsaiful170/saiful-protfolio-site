"use client"
import { Container } from '@/components/Container';
import { Title } from '@/components/Title';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabContentData } from '@constants/index';
import { Briefcase, Calendar, Code2, GraduationCap, User } from 'lucide-react';
import { motion } from 'motion/react';

const ResumeData = [
  {
    title: 'Experience',
    value: 'experience',
    icon: Briefcase,
  },
  {
    title: 'Education',
    value: 'education',
    icon: GraduationCap,
  },
  {
    title: 'Skills',
    value: 'skills',
    icon: Code2,
  },
  {
    title: 'About me',
    value: 'about',
    icon: User,
  },
];

const Resumepage = () => {
  return (
    <>
      <section className="py-5 md:py-10">
        <Container>
          <Title>My Resume</Title>
          <Tabs
            defaultValue="experience"
            className="flex  items-center md:items-start justify-center flex-col md:flex-row w-full gap-6 md:gap-8"
          >
            <TabsList className="md:flex grid grid-cols-2 md:flex-col w-full h-full gap-4 bg-transparent md:w-64">
              {ResumeData?.map((res, i) => (
                <TabsTrigger
                  key={i}
                  value={res?.value}
                  className="bg-bodyColor  w-full  py-2.5 border border-lightSkey/5  rounded-[2px] text-textColor tex-xs font-medium sm:text-base  btn-shadow data-[state=active]:bg-lightSkey/40 data-[state=active]:text-textColor hover:bg-lightSkey/35"
                >
                  <div className="flex items-center px-3 w-[120%] lg:px-8  gap-2.5 md:gap-3">
                    <res.icon className="w-4 h-4 md:w-5 md:h-5 font-semibold" />{' '}
                    {res.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* tabe content */}
            <div className="flex-1 h-auto">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.1, ease: 'backOut' },
                  }}
                  className="text-xl font-bold font-Garamond mb-6 text-textColor md:text-3xl"
                >
                  {TabContentData?.experience?.title}
                </motion.h2>
                <div className="space-y-6 lg:space-y-8 ">
                  {TabContentData?.experience?.items.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: i * 0.1 },
                      }}
                      className="btn-shadow p-6 rounded-md"
                    >
                      <div>
                        <div className="flex gap-y-2  md:items-center md:flex-row flex-col  justify-between">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-textColor">
                              {exp.role}
                            </h3>
                            <p className="text-textColor/60 mt-1 font-normal text-base">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-1 leading-snug text-sm text-textColor/70">
                            <Calendar className="w-5 h-5 -mt-0.5" />{' '}
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-sm max-w-full md:max-w-[90%] md:text-base py-4 font-normal text-textColor/80 tracking-tighter">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {exp.highlights?.map((hei, i) => (
                            <Badge
                              key={i}
                              className="hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                            >
                              {hei}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.1, ease: 'backOut' },
                  }}
                  className="text-xl font-bold font-Garamond mb-6 text-textColor md:text-3xl"
                >
                  {TabContentData?.education?.title}
                </motion.h2>
                <div className="space-y-6 lg:space-y-8 ">
                  {TabContentData?.education?.items.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: i * 0.1 },
                      }}
                      className="btn-shadow p-6 rounded-md"
                    >
                      <div>
                        <div className="flex gap-y-2  md:items-center md:flex-row flex-col  justify-between">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-textColor">
                              {edu.degree}
                            </h3>
                            <p className="text-textColor/60 mt-1 font-normal text-base">
                              {edu.institution}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-1 leading-snug text-sm text-textColor/70">
                            <Calendar className="w-5 h-5 -mt-0.5" />{' '}
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-sm max-w-full md:max-w-[90%] md:text-base py-4 font-normal text-textColor/80 tracking-tighter">
                          {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {edu.achievements?.map((acive, i) => (
                            <Badge
                              key={i}
                              className="hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                            >
                              {acive}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.1, ease: 'backOut' },
                  }}
                  className="text-xl font-bold font-Garamond mb-6 text-textColor md:text-3xl"
                >
                  {TabContentData?.skills?.title}
                </motion.h2>
                <div className="space-y-6 lg:space-y-8 ">
                  {TabContentData?.experience?.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: i * 0.1 },
                      }}
                      className="btn-shadow p-6 rounded-md"
                    >
                      <div>
                        <div className="flex gap-y-2  md:items-center md:flex-row flex-col  justify-between">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-textColor">
                              {skill.role}
                            </h3>
                            <p className="text-textColor/60 mt-1 font-normal text-base">
                              {skill.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-1 leading-snug text-sm text-textColor/70">
                            <Calendar className="w-5 h-5 -mt-0.5" />{' '}
                            {skill.period}
                          </div>
                        </div>
                        <p className="text-sm max-w-full md:max-w-[90%] md:text-base py-4 font-normal text-textColor/80 tracking-tighter">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {skill.highlights?.map((hei, i) => (
                            <Badge
                              key={i}
                              className="hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                            >
                              {hei}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.1, ease: 'backOut' },
                  }}
                  className="text-xl font-bold font-Garamond mb-6 text-textColor md:text-3xl"
                >
                  {TabContentData?.about?.title}
                </motion.h2>
                <div className="space-y-6 lg:space-y-8 ">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: 0.1 },
                    }}
                    className="btn-shadow p-6 rounded-md"
                  >
                    <div>
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-textColor">
                          {TabContentData?.about?.title}
                        </h3>
                        <div>
                          <h4 className="text-lg font-semibold text-textColor/90 tracking-tighter">
                            Career Objective:
                          </h4>
                          <p className="text-sm max-w-full md:max-w-[90%] md:text-base mt-1 font-normal text-textColor/80 tracking-tighter">
                            {TabContentData?.about?.carrer}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-textColor/90 tracking-tighter">
                            Bio..
                          </h4>
                          <p className="text-sm max-w-full md:max-w-[90%] md:text-base mt-1  font-normal text-textColor/80 tracking-tighter">
                            {TabContentData?.about?.bio}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-textColor/90 tracking-tighter">
                            Declaration:
                          </h4>
                          <p className="text-sm max-w-full md:max-w-[90%] md:text-base mt-1 font-normal text-textColor/80 tracking-tighter">
                            {TabContentData?.about?.declaration}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-base lg:text-lg font-semibold text-textColor/90 tracking-tighter">
                          My Interests and Focus Areas:
                        </h4>
                        <div className="flex flex-wrap gap-3 mt-2">
                          {TabContentData?.about?.interests?.map((hei, i) => (
                            <Badge
                              key={i}
                              className="hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm md:text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                            >
                              {hei}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-base lg:text-lg font-semibold text-textColor/90 tracking-tighter">
                          Language:
                        </h4>
                        <div className="flex flex-wrap gap-3 mt-2 ">
                          {TabContentData?.about?.languages?.map((len, i) => (
                            <Badge
                              key={i}
                              className="hover:bg-lightSkey/40 hoverEffect cursor-pointer text-sm md:text-sm font-medium text-textColor/90 bg-bodyColor btn-shadow"
                            >
                              {len}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default Resumepage;
