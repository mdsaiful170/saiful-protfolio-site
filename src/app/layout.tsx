import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import StiarTransition from '@/components/StiarTransition';
import PageTransition from '@/components/PageTransition';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Saiful Islam | Devoloper',
  description:
    '🔥 Full Stack Web Developer | Expert in Modern Web Technologies 🔥i, Im Md Saiful Islam, a dedicated Full Stack Web Developer with expertise in JavaScript, TypeScript, React JS, Next JS, Node JS, Express JS, MongoDB, PostgreSQL, Tailwind CSS, Material UI, Shadcn, and Next UI. I specialize in crafting dynamic, scalable, and high-performance web applications tailored to your needs.',
};

type Reactnode = { children: React.ReactNode };
const RootLayout = ({ children }: Readonly<Reactnode>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <StiarTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2500,
            style: {
              color: '#E0E0E0',
              borderRadius: ' 10px',
              background: ' linear-gradient(145deg, #0b160e, #0d1a11)',
              boxShadow: '8px 8px 11px #050a06,-8px -8px 11px #13261a',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
