'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '#services' },
  
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position:'fixed',top:0,left:0,right:0,zIndex:50,
        padding: scrolled ? '12px 0' : '24px 0',
        background: scrolled ? 'rgba(5,8,22,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

        <Link href="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
          <div style={{width:36,height:36,borderRadius:8,background:'linear-gradient(135deg,#3B82F6,#8B5CF6)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'Space Grotesk,sans-serif',fontWeight:700,fontSize:13,boxShadow:'0 0 20px rgba(59,130,246,0.4)'}}>
            8U
          </div>
          <span style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:17,letterSpacing:'-0.01em'}}>
            8 Unit <span style={{color:'#94A3B8',fontWeight:400}}>Technologies</span>
          </span>
        </Link>

        <nav style={{display:'flex',alignItems:'center',gap:32}}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity:0, y:-10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay: 0.1*i+0.5 }}
              style={{color:'#94A3B8',textDecoration:'none',fontSize:14,fontWeight:500,position:'relative',transition:'color 0.2s'}}
              onMouseEnter={e => (e.currentTarget.style.color='#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color='#94A3B8')}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{scale:1.04}} whileTap={{scale:0.97}}
          style={{display:'inline-flex',alignItems:'center',gap:8,padding:'11px 24px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:500,fontSize:14,textDecoration:'none',boxShadow:'0 0 25px rgba(59,130,246,0.3)',letterSpacing:'0.01em'}}
        >
          Start A Project
        </motion.a>

      </div>
    </motion.header>
  );
}
