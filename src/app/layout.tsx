import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/animations/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: '8 Unit Technologies — Engineering The Future Of Digital Innovation',
  description: 'We build intelligent digital experiences, scalable platforms, and cutting-edge software solutions for modern businesses.',
  keywords: ['software development', 'AI solutions', 'web development', 'mobile apps', 'cloud solutions'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body style={{background:'#050816',color:'white',margin:0,padding:0,overflowX:'hidden',WebkitFontSmoothing:'antialiased'}}>
        <SmoothScroll />
        <div className='desktop-only-cursor'><CustomCursor /></div>
        <ScrollProgress />
        <div className='noise-overlay' aria-hidden='true' />
        {children}
      </body>
    </html>
  );
}
