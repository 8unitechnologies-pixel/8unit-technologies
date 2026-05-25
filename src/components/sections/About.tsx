'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const values = [
  'We write clean, maintainable code built to last',
  'Every pixel is intentional — design is never an afterthought',
  'We communicate clearly and deliver on time',
  'Performance and scalability are non-negotiable',
  'We treat every client project like our own business',
  'Continuous learning keeps us ahead of the curve',
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id='about' style={{padding: isMobile ? '80px 20px' : '120px 48px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)',pointerEvents:'none'}} />
      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <div style={{display:'flex',flexDirection: isMobile ? 'column' : 'row',gap: isMobile ? 40 : 80,alignItems: isMobile ? 'stretch' : 'center'}}>

          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9}} style={{flex:1}}>
            <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.25)',color:'#3B82F6',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:24}}>
              Who We Are
            </span>
            <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize: isMobile ? 'clamp(32px,8vw,48px)' : 'clamp(36px,4vw,56px)',fontWeight:700,color:'white',margin:'0 0 24px',letterSpacing:'-0.02em',lineHeight:1.1}}>
              A Studio Built For
              <br />
              <span style={{background:'linear-gradient(135deg,#3B82F6,#06B6D4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                The Modern Web
              </span>
            </h2>
            <p style={{color:'#94A3B8',fontSize: isMobile ? 15 : 17,lineHeight:1.75,marginBottom:20}}>
              8 Unit Technologies is a premium software development studio based in Pietermaritzburg, South Africa. We partner with startups, scale-ups and enterprises to build digital products that stand out.
            </p>
            <p style={{color:'#94A3B8',fontSize: isMobile ? 15 : 17,lineHeight:1.75,marginBottom:40}}>
              Our team combines deep technical expertise with a designer’s eye for detail — producing software that is not only functional, but genuinely exceptional.
            </p>
            <div style={{display:'flex',gap:32,flexWrap:'wrap'}}>
              {[{num:'3+',label:'Years Experience'},{num:'100%',label:'Client Satisfaction'}].map(stat => (
                <div key={stat.label}>
                  <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:32,fontWeight:700,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{stat.num}</div>
                  <div style={{color:'#64748B',fontSize:13,marginTop:4}}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x: isMobile ? 0 : 40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}}
            style={{flex:1,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:24,padding: isMobile ? '28px 20px' : '40px'}}
          >
            <h3 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:22,fontWeight:600,color:'white',margin:'0 0 32px'}}>
              Our Commitments
            </h3>
            <div style={{display:'flex',flexDirection:'column',gap:20}}>
              {values.map((v, i) => (
                <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}}
                  style={{display:'flex',alignItems:'flex-start',gap:14}}
                >
                  <CheckCircle2 size={20} color='#3B82F6' style={{flexShrink:0,marginTop:2}} />
                  <span style={{color:'#CBD5E1',fontSize: isMobile ? 14 : 15,lineHeight:1.6}}>{v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}