import imgOne from '@images/project-1.png';
import imgTwo from '@images/project-2.png';
import imgThree from '@images/project-3.png';
import imgFour from '@images/project-4.png';
import imgFive from '@images/project-5.png';
import imgSix from '@images/project-6.png';
import imgSeven from '@images/project-7.png';
import imgEight from '@images/project-8.png';
import imgNine from '@images/project-9 .png';
import imgTen from '@images/project-10.png';
import imgEliven from '@images/project-11.png';
import imgTowallbe from '@images/project-12.png';
import imgThertine from '@images/project-13.png';
import imgFourtine from '@images/project-14.png';
import imgFieftine from '@images/project-15.png';
import imgSixtine from '@images/project-16.png';
import imgSeventine from '@images/project-17.png';
import imgEightine from '@images/project-18.png';

interface LinkType {
  title: string;
  href: string;
}
export const NavbarDataLinks: LinkType[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Resume', href: '/resume' },
  { title: 'Works', href: '/work' },
  { title: 'Contact', href: '/contact' },
];
interface StatusType {
  num: number;
  text: string;
}

export const StatusData: StatusType[] = [
  {
    num: 4,
    text: 'Years of Experience',
  },
  {
    num: 33,
    text: 'Projects Completed',
  },
  {
    num: 10,
    text: 'Technologies Mastered',
  },
  {
    num: 500,
    text: 'Code Commits',
  },
];

interface ServiceType {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const ServiceProviderData: ServiceType[] = [
  {
    id: '01',
    title: 'Professional Web Development',
    description:
      'We create high-quality, responsive, and modern websites tailored to your business needs, ensuring optimal user experience.',
    href: '/contact',
  },
  {
    id: '02',
    title: 'Website Maintenance & Issue Fixing',
    description:
      'From bug fixes to performance optimization, we provide expert support to keep your website running smoothly.',
    href: '/contact',
  },
  {
    id: '03',
    title: 'Custom Application Solutions',
    description:
      'We develop custom applications that are scalable, secure, and tailored to your specific business requirements.',
    href: '/contact',
  },
  {
    id: '04',
    title: 'SEO-Friendly Website Optimization',
    description:
      'We optimize your website for search engines by improving speed, structure, and content to enhance visibility and rankings.',
    href: '/contact',
  },
  {
    id: '05',
    title: 'Computer operator Services',
    description:
      'We provide professional computer operator services, including data entry, management, and system maintenance. Our expertise covers Microsoft Word, Excel, PowerPoint, and other essential office applications to ensure efficiency and accuracy.',
    href: '/contact',
  },
  {
    id: '06',
    title: 'Industry & Company Software Management',
    description:
      'We offer expert software management services for industries and companies, ensuring smooth operation, data security, and system optimization. Our team has deep knowledge of various enterprise solutions, automation tools, and IT infrastructure management.',
    href: '/contact',
  },
];

export const TabContentData = {
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Junior Frontend Developer',
        company: 'Hablu Programmer',
        period: '2023-Present',
        description:
          'Developing and maintaining scalable web applications using modern frontend technologies. Collaborating with cross-functional teams to ensure high-quality UI/UX.',
        highlights: ['React.js', 'Next.js', 'TypeScript', 'PostgreSQL'],
      },
      {
        role: 'Web Development Course',
        company: 'FlyTech IT',
        period: '2021-2022',
        description:
          'Completed a comprehensive web development training program, covering frontend and backend technologies, database management, and team collaboration.',
        highlights: [
          'PHP',
          'HTML',
          'CSS',
          'SQL',
          'JavaScript',
          'Team Leadership',
        ],
      },
      {
        role: 'Computer operator & Software Management',
        company: 'FlyTech IT',
        period: 'Jan2023-Dec2023',
        description:
          'Gained expertise in computer operator, software management, and office applications, enabling efficient technical problem-solving and workflow management.',
        highlights: ['Computer operator', 'MS Office', 'Software Management'],
      },
    ],
  },
  education: {
    title: 'Educational Background',
    items: [
      {
        degree: 'SSC (Vocational) - General Electronics',
        institution: 'Sylhet Technical Training Center',
        period: '2017-2019',
        description:
          'Focused on electronics fundamentals, circuit design, and hardware troubleshooting, gaining hands-on experience in practical applications.',
        achievements: ['GPA 4.68', 'Electronics'],
      },
      {
        degree: 'Diploma in Computer Engineering',
        institution: 'Sylhet Polytechnic Institute',
        period: '2019-2023-(4years)',
        description:
          'Studied computer hardware, networking, programming, and database management. Led the programming club and received an Academic Excellence Award.',
        achievements: [
          'CGPA 3.81',
          'Academic Excellence Award',
          'Programming Club Lead',
        ],
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Frontend Development',
        description:
          'Proficient in modern frontend technologies and frameworks, focusing on creating responsive, scalable, and high-performance web applications.',
        skills: [
          'React.js',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
        ],
      },
      {
        name: 'Backend Development',
        description:
          'Experienced in backend technologies, API development, and database management, ensuring efficient and secure server-side applications.',
        skills: ['Node.js', 'Express.js', 'Next.js', 'PostgreSQL', 'MongoDB'],
      },
      {
        name: 'Tools & Others',
        description:
          'Familiar with essential productivity tools and networking fundamentals, supporting seamless workflow and team collaboration.',
        skills: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Networking'],
      },
    ],
  },
  about: {
    title: 'About Me',
    carrer:
      'Achieving a dynamic and challenging job in organizationwhere I can use my technical interpersonal skills, creativityand above all my learning experience in order to developmy career as well as to contribute in the welfare of theorganization.To build up a career as self-motivated and innovativeExecutive for the time being willing to take challenge any sort of Executive as well as Management Affairs.',

    bio: 'A passionate developer driven by the excitement of building scalable applications, innovating in the tech industry, and continuously exploring new technologies to stay ahead in the ever-evolving digital landscape. Additionally, I have a keen interest in securing a high-ranking position in a reputed factory and excelling in factory management.',
    declaration:
      'I would be appreciated if you give me an opportunity to workwith you and to execute myself your support. In addition, I liketo mention that, my educational qualifications, experiencesare correct and described truly, fairly, and the informationgiven above is fully updated.',
    interests: [
      'Open Source Contribution',
      'Technology & Innovation',
      'Software Development',
      'Industry Research',
      'Team Leadership',
      'Career Growth ',
      ' Job Excellence',
      'Hard Work & Dedication',
    ],
    languages: ['English', 'Bangla', 'Hindi'],
  },
};

export const worksData = [
  {
    id: '01',
    title: 'Disastersio-site',
    livelink: 'https://disasters-io-dev.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/disastersio-project.git',
    image: imgOne,
    technology: ['React.js', 'Tailwindcss', 'Javascript', 'React-router-dom'],
  },
  {
    id: '02',
    title: 'Club-Booking-site',
    livelink: 'https://club-booking-site.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/my-business-site.git',
    image: imgTwo,
    technology: [
      'React.js',
      'tailwindcss',
      'NextUi',
      'framer-motion',
      'lucide-react',
      'lightgalleryjs',
      'Swiperjs',
      'jspdf',
    ],
  },
  {
    id: '03',
    title: 'Car-landing-site',
    livelink: 'https://motion-hub.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/motion-menubar',
    image: imgThree,
    technology: [
      'Reactjs',
      'tailwindcss',
      'Lucide-react',
      'Framer-motion',
      'Swiperjs',
    ],
  },
  {
    id: '04',
    title: 'Iphone-16-landing-site ',
    livelink: 'https://i-phone-site-colone.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/iPhone_Site_Colone',
    image: imgFour,
    technology: ['Reactjs', 'tailwindcss', 'ThreeJs', 'Gsap'],
  },
  {
    id: '05',
    title: 'Club-Boking-Site',
    livelink: 'https://best-restaurent.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/best-restaurent',
    image: imgFive,
    technology: [
      'Reactjs',
      'tailwindcss',
      'Lucide-react',
      'Framer-motion',
      'Next.Ui',
      'Swiperjs',
      'jspdf',
    ],
  },
  {
    id: '06',
    title: 'wern-finance-site',
    livelink: 'https://wern-finance-site.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/nextui-lending-page',
    image: imgSix,
    technology: [],
  },
  {
    id: '07',
    title: 'task-management-system',
    livelink: 'https://task-management100.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/task-management-system',
    image: imgSeven,
    technology: [
      'Reactjs',
      'tailwindcss',
      'Lucide-react',
      'Framer-motion',
      'Aceternity.Ui',
      'TypeScript',
    ],
  },
  {
    id: '08',
    title: 'wizia-project',
    livelink: 'https://wizia-project.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/wizia-project',
    image: imgEight,
    technology: [
      'Reactjs',
      'NextUi',
      'Swiperjs',
      'tailwindcss',
      'Lucide-react',
    ],
  },
  {
    id: '09',
    title: 'Motion-ui-landing-page',
    livelink: 'https://motion-ui-site100.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/motion-ui-site',
    image: imgNine,
    technology: ['Reactjs', 'Framer-motion', 'tailwindcss', 'Threejs'],
  },
  {
    id: '10',
    title: 'It-Support-landing-page',
    livelink: 'https://creativefor-you.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/creative_for_you',
    image: imgTen,
    technology: ['HTML', 'Tailwindcss', 'DasiyUi', 'Javascript', 'vite'],
  },
  {
    id: '11',
    title: 'Bussiness-site',
    livelink: 'https://cws-msi.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/CWs_MsI',
    image: imgTowallbe,
    technology: ['HTML', 'Tailwindcss', 'Javascript', 'vite', 'OwlCarousel'],
  },
  {
    id: '12',
    title: 'Creativ-Skills-landing-page',
    livelink: 'https://creative-your-skills.vercel.app/',
    githublink: 'https://github.com/mdsaiful170/creative_your_skills',
    image: imgEliven,
    technology: ['HTML', 'Tailwindcss', 'Javascript', 'vite'],
  },
  {
    id: '13',
    title: 'Travel-site',
    livelink: 'https://travel-site120.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/travel-web',
    image: imgThertine,
    technology: ['HTML', 'CSS', 'AOSjs', 'javascript'],
  },
  {
    id: '14',
    title: 'Education-site',
    livelink: 'https://education-website120.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/caterserve_restaurant',
    image: imgFourtine,
    technology: ['HTML', 'CSS', 'AOSjs', 'javascript'],
  },
  {
    id: '15',
    title: 'Car-website',
    livelink: 'https://car-website555.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/cars-site',
    image: imgFieftine,
    technology: ['HTML', 'CSS', 'Swiperjs', 'JavaScript'],
  },
  {
    id: '16',
    title: 'Constructions-site',
    livelink: 'https://constructions-site100.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/constraction_site',
    image: imgSixtine,
    technology: ['HTML', 'CSS', 'JavaScript', 'swiperjs', 'lightgallery'],
  },
  {
    id: '17',
    title: 'Book-store-site',
    livelink: 'https://book-store-web120.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/my-book-stor',
    image: imgSeventine,
    technology: ['HTML', 'CSS', 'JavaScript', 'Swiperjs'],
  },
  {
    id: '18',
    title: 'Food-delivery-site',
    livelink: 'https://food-web100.netlify.app/',
    githublink: 'https://github.com/mdsaiful170/miltipage-food-site',
    image: imgEightine,
    technology: ['HTML', 'CSS', 'JavaScript', 'Swiperjs'],
  },
];
