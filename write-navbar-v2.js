const fs = require('fs');

const content = `'use client';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScroll = () => setScrolled(window.scrollY > 40);
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkScroll();
    checkMobile();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position:'fixed',top:0,left:0,right:0,zIndex:9999,
        background: scrolled || mobileOpen ? 'rgba(5,8,22,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{maxWidth:1400,margin:'0 auto',padding:'16px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

        <Link href='/' style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none',flexShrink:0}}>
          <div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#3B82F6,#8B5CF6)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'Space Grotesk,sans-serif',fontWeight:700,fontSize:12,flexShrink:0}}>
            8U
          </div>
          <span style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize: isMobile ? 13 : 15,whiteSpace:'nowrap'}}>
            8 Unit Technologies
          </span>
        </Link>

        {!isMobile && (
          <nav style={{display:'flex',alignItems:'center',gap:28}}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                style={{color:'#94A3B8',textDecoration:'none',fontSize:14,fontWeight:500,cursor:'pointer'}}
                onMouseEnter={e => (e.currentTarget.style.color='#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color='#94A3B8')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div style={{display:'flex',alignItems:'center',gap:8}}>
          {!isMobile && (
            <a href='#contact'
              style={{display:'inline-flex',alignItems:'center',padding:'10px 20px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:500,fontSize:13,textDecoration:'none',whiteSpace:'nowrap'}}
            >
              Start A Project
            </a>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:8,padding:'8px 16px',color:'white',cursor:'pointer',fontSize:13,fontWeight:600}}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          )}
        </div>
      </div>

      {mobileOpen && isMobile && (
        <div style={{background:'rgba(5,8,22,0.99)',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'16px 24px 24px'}}>
          {navLinks.map(link => (
            <button key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{display:'block',width:'100%',textAlign:'left',color:'#CBD5E1',background:'none',border:'none',borderBottom:'1px solid rgba(255,255,255,0.05)',padding:'16px 0',fontSize:18,fontWeight:500,cursor:'pointer'}}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            style={{display:'block',width:'100%',textAlign:'center',marginTop:16,padding:'14px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:600,fontSize:15,border:'none',cursor:'pointer'}}
          >
            Start A Project
          </button>
        </div>
      )}
    </motion.header>
  );
}`;

fs.writeFileSync('src/components/sections/Navbar.tsx', content);
console.log('Navbar written!');
