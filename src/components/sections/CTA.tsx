'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" style={{padding:'120px 48px',position:'relative',overflow:'hidden'}}>

      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',pointerEvents:'none'}} />
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'rgba(59,130,246,0.04)',filter:'blur(80px)',pointerEvents:'none'}} />

      <div style={{maxWidth:900,margin:'0 auto',position:'relative',textAlign:'center'}}>
        <motion.div
          initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9}}
        >
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.25)',color:'#3B82F6',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:32}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#3B82F6',animation:'pulse 2s infinite'}} />
            Available For Projects
          </span>

          <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(40px,5vw,72px)',fontWeight:700,color:'white',margin:'0 0 24px',letterSpacing:'-0.03em',lineHeight:1.05}}>
            Ready To Build
            <br />
            <span style={{background:'linear-gradient(135deg,#3B82F6,#06B6D4,#8B5CF6)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
              Something Exceptional?
            </span>
          </h2>

          <p style={{color:'#94A3B8',fontSize:19,lineHeight:1.65,maxWidth:580,margin:'0 auto 48px'}}>
            Let’s turn your vision into a world-class digital product. We’re selective about the projects we take on — and we give each one everything we have.
          </p>

          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <motion.a
              href="mailto:8unitechnologies@gmail.com"
              whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              style={{display:'inline-flex',alignItems:'center',gap:10,padding:'16px 36px',borderRadius:999,background:'linear-gradient(135deg,#3B82F6,#06B6D4)',color:'white',fontWeight:600,fontSize:15,textDecoration:'none',boxShadow:'0 0 40px rgba(59,130,246,0.4)',letterSpacing:'0.01em'}}
            >
              Start A Project <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="mailto:8unitechnologies@gmail.com"
              whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              style={{display:'inline-flex',alignItems:'center',gap:10,padding:'16px 36px',borderRadius:999,background:'transparent',border:'1px solid rgba(255,255,255,0.15)',color:'white',fontWeight:600,fontSize:15,textDecoration:'none',letterSpacing:'0.01em'}}
            >
              <Calendar size={18} /> Schedule Consultation
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
