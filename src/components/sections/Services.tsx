'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Globe, Smartphone, Cloud, Palette, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const serviceList = [
  { icon: Code2, title: 'Custom Software Development', short: 'Enterprise-grade systems and platforms built for scale.', detail: 'We design and build bespoke software systems — SaaS platforms, API ecosystems, or complex enterprise applications. Every solution is architected for maintainability, performance and scale.', color: '#3B82F6', glow: 'rgba(59,130,246,0.15)' },
  { icon: Brain, title: 'AI Solutions', short: 'Intelligent automation and AI integrations that give your business an edge.', detail: 'From chatbots to full machine learning pipelines and intelligent automation workflows — we bring AI into your product in a way that is practical, powerful and production-ready.', color: '#8B5CF6', glow: 'rgba(139,92,246,0.15)' },
  { icon: Globe, title: 'Web Development', short: 'Modern, fast and scalable web applications with best-in-class performance.', detail: 'We build web applications using Next.js and React that deliver sub-second load times, perfect Lighthouse scores and exceptional user experiences across all devices.', color: '#06B6D4', glow: 'rgba(6,182,212,0.15)' },
  { icon: Smartphone, title: 'Mobile Applications', short: 'Cross-platform mobile solutions for iOS and Android.', detail: 'Using React Native and Expo, we ship beautiful cross-platform mobile apps that feel native on both iOS and Android — from MVPs to full-scale consumer applications.', color: '#10B981', glow: 'rgba(16,185,129,0.15)' },
  { icon: Cloud, title: 'Cloud and DevOps', short: 'Infrastructure, CI/CD pipelines and cloud architecture for reliability.', detail: 'We set up and manage cloud infrastructure on AWS, GCP or Azure — including Docker, Kubernetes, CI/CD pipelines, monitoring dashboards and zero-downtime deployment strategies.', color: '#F59E0B', glow: 'rgba(245,158,11,0.15)' },
  { icon: Palette, title: 'UI/UX Design', short: 'Beautiful, intuitive digital experiences designed with precision.', detail: 'Great software starts with great design. We create full design systems, wireframes, interactive prototypes and final UI in Figma — then implement them with pixel-perfect precision.', color: '#EC4899', glow: 'rgba(236,72,153,0.15)' },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id='services' style={{padding:'120px 48px',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 60%)',pointerEvents:'none'}} />
      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} style={{textAlign:'center',marginBottom:80}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.25)',color:'#8B5CF6',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:24}}>What We Build</span>
          <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(36px,4vw,56px)',fontWeight:700,color:'white',margin:'0 0 16px',letterSpacing:'-0.02em'}}>Our Services</h2>
          <p style={{color:'#94A3B8',fontSize:18,maxWidth:560,margin:'0 auto',lineHeight:1.6}}>Full-spectrum technology solutions engineered for modern businesses that refuse to compromise.</p>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(380px,1fr))',gap:24}}>
          {serviceList.map((svc, i) => {
            const Icon = svc.icon;
            const isOpen = expanded === i;
            return (
              <motion.div key={svc.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.1}} whileHover={{y:isOpen?0:-4}}
                style={{position:'relative',padding:'36px',borderRadius:20,cursor:'pointer',background:isOpen?svc.color+'08':'rgba(255,255,255,0.025)',border:isOpen?'1px solid '+svc.color+'55':'1px solid rgba(255,255,255,0.07)',backdropFilter:'blur(12px)',boxShadow:isOpen?'0 20px 60px '+svc.glow:'none',transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)',overflow:'hidden'}}
                onClick={() => setExpanded(isOpen ? null : i)}>
                <div style={{position:'absolute',top:0,right:0,width:200,height:200,borderRadius:'50%',background:svc.glow,filter:'blur(60px)',pointerEvents:'none',opacity:isOpen?0.8:0.3}} />
                <div style={{width:52,height:52,borderRadius:14,background:svc.color+'18',border:'1px solid '+svc.color+'30',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:24}}>
                  <Icon size={24} color={svc.color} />
                </div>
                <h3 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:20,fontWeight:600,color:'white',margin:'0 0 12px'}}>{svc.title}</h3>
                <p style={{color:'#94A3B8',fontSize:15,lineHeight:1.65,margin:0}}>{svc.short}</p>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{opacity:0,height:0,marginTop:0}} animate={{opacity:1,height:'auto',marginTop:20}} exit={{opacity:0,height:0,marginTop:0}} transition={{duration:0.4}} style={{overflow:'hidden'}}>
                      <div style={{borderTop:'1px solid '+svc.color+'25',paddingTop:20}}>
                        <p style={{color:'#CBD5E1',fontSize:14,lineHeight:1.75,margin:'0 0 20px'}}>{svc.detail}</p>
                        <button onClick={(e)=>{e.stopPropagation();window.location.href='#contact';}} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'10px 20px',borderRadius:999,background:svc.color,color:'white',fontSize:13,fontWeight:600,border:'none',cursor:'pointer'}}>
                          Get A Quote
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div style={{marginTop:24,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <span style={{color:svc.color,fontSize:13,fontWeight:500}}>{isOpen?'Show less':'Learn more'}</span>
                  <motion.div animate={{rotate:isOpen?180:0}} transition={{duration:0.3}}>
                    <ChevronDown size={16} color={svc.color} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}