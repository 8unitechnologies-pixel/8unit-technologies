'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  { name:'Sarah Mitchell', role:'CTO, NovaTech Solutions', text:'8 Unit Technologies completely transformed our platform. The attention to detail, the animations, the performance — everything was beyond expectations. Genuinely world-class work.', rating:5 },
  { name:'James Okafor', role:'Founder, Pulse Analytics', text:'We had a tight deadline and a complex AI integration. They delivered ahead of schedule with zero compromises on quality. Our users noticed the difference immediately.', rating:5 },
  { name:'Priya Naidoo', role:'Product Lead, FinFlow', text:'From discovery to deployment the process was seamless. The team understood our vision better than we did and built something truly exceptional. Highly recommend.', rating:5 },
  { name:'David Chen', role:'CEO, CloudBase', text:'The UI/UX work alone was worth every cent. We have had multiple customers comment that our product looks like it belongs in the App Store hall of fame. Remarkable team.', rating:5 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{padding:'120px 48px',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 60% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)',pointerEvents:'none'}} />

      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <motion.div
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
          style={{textAlign:'center',marginBottom:72}}
        >
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.25)',color:'#8B5CF6',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:24}}>
            Client Stories
          </span>
          <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(36px,4vw,56px)',fontWeight:700,color:'white',margin:0,letterSpacing:'-0.02em'}}>
            What Clients Say
          </h2>
        </motion.div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24}}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.1}}
              whileHover={{y:-4}}
              style={{
                padding:'36px',borderRadius:20,
                background:'rgba(255,255,255,0.03)',
                border:'1px solid rgba(255,255,255,0.07)',
                backdropFilter:'blur(12px)',
                transition:'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.border='1px solid rgba(139,92,246,0.3)'; e.currentTarget.style.boxShadow='0 20px 60px rgba(139,92,246,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.border='1px solid rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{display:'flex',gap:4,marginBottom:20}}>
                {[...Array(t.rating)].map((_,si) => (
                  <span key={si} style={{color:'#F59E0B',fontSize:16}}>★</span>
                ))}
              </div>
              <p style={{color:'#CBD5E1',fontSize:15,lineHeight:1.75,margin:'0 0 28px',fontStyle:'italic'}}>
                “{t.text}”
              </p>
              <div>
                <div style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:15}}>{t.name}</div>
                <div style={{color:'#94A3B8',fontSize:13,marginTop:2}}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
