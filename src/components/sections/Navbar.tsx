'use client';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position:'fixed',top:0,left:0,right:0,zIndex:50,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled || mobileOpen ? 'rgba(5,8,22,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>

        <Link href='/' style={{display:'flex',alignItems:'center',gap:6,textDecoration:'none',flexShrink:0,minWidth:0}}>
          <div style={{width:34,height:34,borderRadius:8,background:'linear-gradient(135deg,#3B82F6,#8B5CF6)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'Space Grotesk,sans-serif',fontWeight:700,fontSize:12,boxShadow:'0 0 20px rgba(59,130,246,0.4)',flexShrink:0}}>
            8U
          </div>
          {!isMobile && (
            <span style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:15,whiteSpace:'nowrap'}}>
              8 Unit <span style={{color:'#94A3B8',fontWeight:400}}>Technologies</span>
            </span>
          )}
          {isMobile && (
            <span className='navbar-name' style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:14,whiteSpace:'nowrap'}}>
              8 Unit Technologies
            </span>
          )}
        </Link>

        {!isMobile && (
          <nav style={{display:'flex',alignItems:'center',gap:28}}>
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.1*i+0.5 }}
                style={{color:'#94A3B8',textDecoration:'none',fontSize:14,fontWeight:500,transition:'color 0.2s'}}
                onMouseEnter={e => (e.currentTarget.style.color='#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color='#94A3B8')}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        )}

        <div style={{display:'flex',alignItems:'center',gap:8}}>
          {!isMobile && (
            <motion.a href='#contact' whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              style={{display:'inline-flex',alignItems:'center',padding:'10px 20px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:500,fontSize:13,textDecoration:'none',boxShadow:'0 0 25px rgba(59,130,246,0.3)',whiteSpace:'nowrap'}}
            >
              Start A Project
            </motion.a>
          )}

          {isMobile && (
            <button onClick={() => setMobileOpen(!mobileOpen)}
              style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:8,padding:'7px 10px',color:'white',cursor:'pointer',fontSize:12,fontWeight:500,flexShrink:0,marginRight:8}}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}
            style={{background:'rgba(5,8,22,0.98)',borderTop:'1px solid rgba(255,255,255,0.06)',overflow:'hidden'}}
          >
            <div style={{padding:'24px 20px',display:'flex',flexDirection:'column',gap:4}}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{color:'#CBD5E1',textDecoration:'none',fontSize:18,fontWeight:500,padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,0.05)'}}
                >
                  {link.label}
                </a>
              ))}
              <a href='#contact' onClick={() => setMobileOpen(false)}
                style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:16,padding:'14px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:600,fontSize:15,textDecoration:'none'}}
              >
                Start A Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}