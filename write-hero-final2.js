const fs = require('fs');

const content = `'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingSphere = dynamic(() => import('@/components/three/FloatingSphere'), {
  ssr: false,
  loading: () => (
    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:120,height:120,borderRadius:'50%',border:'1px solid rgba(59,130,246,0.3)'}} />
    </div>
  ),
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',background:'transparent'}}>

      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)',pointerEvents:'none'}} />

      <div style={{width:'100%',padding: isMobile ? '90px 20px 60px' : '0 48px',paddingTop: isMobile ? 90 : 100}}>
        <div style={{
          display:'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 0 : 48,
          minHeight: isMobile ? 'auto' : '90vh',
        }}>

          {isMobile && (
            <div style={{width:'100%',height:280,position:'relative',marginBottom:32,flexShrink:0,overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
                <div style={{width:220,height:220,borderRadius:'50%',background:'rgba(59,130,246,0.1)',filter:'blur(60px)'}} />
              </div>
              <FloatingSphere />
            </div>
          )}

          <div style={{flex:1,display:'flex',flexDirection:'column',gap: isMobile ? 20 : 32,alignItems: isMobile ? 'center' : 'flex-start',textAlign: isMobile ? 'center' : 'left',width:'100%'}}>

            <motion.span
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:999,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(59,130,246,0.25)',color:'#06B6D4',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',width:'fit-content'}}
            >
              <span style={{width:6,height:6,borderRadius:'50%',background:'#06B6D4'}} />
              Next-Gen Software Studio
            </motion.span>

            <motion.h1
              initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.35}}
              style={{fontFamily:'Space Grotesk, sans-serif',fontSize: isMobile ? 'clamp(36px,9vw,52px)' : 'clamp(42px,5vw,72px)',fontWeight:700,lineHeight:1.08,letterSpacing:'-0.02em',margin:0}}
            >
              <span style={{color:'#ffffff',display:'block'}}>Engineering</span>
              <span style={{background:'linear-gradient(135deg,#3B82F6,#06B6D4,#8B5CF6)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',display:'block'}}>The Future</span>
              <span style={{color:'#ffffff',display:'block'}}>Of Digital</span>
              <span style={{background:'linear-gradient(135deg,#60A5FA,#06B6D4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',display:'block'}}>Innovation</span>
            </motion.h1>

            <motion.p
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}}
              style={{color:'#94A3B8',fontSize: isMobile ? 15 : 18,lineHeight:1.7,maxWidth:520,margin:0}}
            >
              We build <span style={{color:'#CBD5E1',fontWeight:500}}>intelligent digital experiences</span>, scalable platforms, and cutting-edge software solutions for modern businesses that demand excellence.
            </motion.p>

            <motion.div
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.65}}
              style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent: isMobile ? 'center' : 'flex-start'}}
            >
              <motion.a href='#contact' whileHover={{scale:1.04}} whileTap={{scale:0.97}}
                style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:500,fontSize:14,textDecoration:'none',boxShadow:'0 0 30px rgba(59,130,246,0.35)'}}
              >
                Book Consultation <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}
              style={{display:'flex',gap:40,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.06)',justifyContent: isMobile ? 'center' : 'flex-start',width:'100%'}}
            >
              {[{value:'5★',label:'Client Rating'},{value:'3+',label:'Years Experience'}].map((stat) => (
                <div key={stat.label}>
                  <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:26,fontWeight:700,background:'linear-gradient(135deg,#60A5FA,#06B6D4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{stat.value}</div>
                  <div style={{color:'#94A3B8',fontSize:12,letterSpacing:'0.05em',marginTop:2}}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {!isMobile && (
            <motion.div
              initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:0.2}}
              style={{flex:1,position:'relative',height:680}}
            >
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
                <div style={{width:420,height:420,borderRadius:'50%',background:'rgba(59,130,246,0.08)',filter:'blur(80px)'}} />
              </div>
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
                <div style={{width:260,height:260,borderRadius:'50%',background:'rgba(139,92,246,0.08)',filter:'blur(60px)'}} />
              </div>
              <FloatingSphere />
              <motion.div animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
                style={{position:'absolute',top:80,left:0,background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(59,130,246,0.2)',borderRadius:12,padding:'12px 16px'}}
              >
                <div style={{color:'#94A3B8',fontSize:11}}>Response Time</div>
                <div style={{color:'#06B6D4',fontSize:14,fontWeight:600}}>~24hrs</div>
              </motion.div>
              <motion.div animate={{y:[0,8,0]}} transition={{duration:4.5,repeat:Infinity,ease:'easeInOut',delay:1}}
                style={{position:'absolute',bottom:120,right:0,background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(139,92,246,0.2)',borderRadius:12,padding:'12px 16px'}}
              >
                <div style={{color:'#94A3B8',fontSize:11}}>Tech Stack</div>
                <div style={{color:'#8B5CF6',fontSize:14,fontWeight:600}}>Next.js + AI</div>
              </motion.div>
            </motion.div>
          )}

        </div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}}
        style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,color:'#94A3B8'}}
      >
        <span style={{fontSize:10,letterSpacing:'0.2em',textTransform:'uppercase'}}>Scroll</span>
        <motion.div animate={{y:[0,6,0]}} transition={{duration:1.5,repeat:Infinity}}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  );
}`;

fs.writeFileSync('src/components/sections/Hero.tsx', content);
console.log('Hero written successfully!');
