'use client';
import { motion } from 'framer-motion';

const techs = [
  { name:'Next.js', color:'#ffffff' },
  { name:'React', color:'#61DAFB' },
  { name:'TypeScript', color:'#3178C6' },
  { name:'Node.js', color:'#68A063' },
  { name:'Tailwind', color:'#06B6D4' },
  { name:'Supabase', color:'#3ECF8E' },
  { name:'PostgreSQL', color:'#336791' },
  { name:'Docker', color:'#2496ED' },
  
  
  { name:'Framer', color:'#0055FF' },
  { name:'Vercel', color:'#ffffff' },
];

export default function TechStack() {
  return (
    <section style={{padding:'100px 48px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'rgba(11,16,32,0.6)',pointerEvents:'none'}} />

      <div style={{maxWidth:1400,margin:'0 auto',position:'relative'}}>
        <motion.div
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
          style={{textAlign:'center',marginBottom:64}}
        >
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(6,182,212,0.1)',border:'1px solid rgba(6,182,212,0.25)',color:'#06B6D4',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:24}}>
            Our Stack
          </span>
          <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(32px,3.5vw,48px)',fontWeight:700,color:'white',margin:'0 0 12px',letterSpacing:'-0.02em'}}>
            Technologies We Master
          </h2>
          <p style={{color:'#94A3B8',fontSize:17,maxWidth:480,margin:'0 auto'}}>
            Best-in-class tools selected for performance, scalability and developer experience.
          </p>
        </motion.div>

        <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'center',width:'100%'}}>
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.05}}
              whileHover={{y:-4,scale:1.05}}
              style={{
                padding:'14px 28px',borderRadius:12,
                background:'rgba(255,255,255,0.03)',
                border:'1px solid rgba(255,255,255,0.08)',
                backdropFilter:'blur(8px)',
                cursor:'default',
                transition:'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${tech.color}44`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${tech.color}22`;
                e.currentTarget.style.background = `${tech.color}0a`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <span style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,fontSize:15,color:tech.color}}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
