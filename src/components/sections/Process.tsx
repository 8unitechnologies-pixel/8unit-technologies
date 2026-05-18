'use client';
import { motion } from 'framer-motion';

const steps = [
  { num:'01', title:'Discovery', desc:'Deep-dive into your business goals, target audience, technical requirements and competitive landscape.' },
  { num:'02', title:'Strategy', desc:'Architecture planning, technology selection, UX strategy and project roadmap with clear milestones.' },
  { num:'03', title:'Design', desc:'Creating premium interfaces — wireframes, prototypes and pixel-perfect UI that converts and delights.' },
  { num:'04', title:'Development', desc:'Building scalable, secure and performant systems using modern best practices and clean code.' },
  { num:'05', title:'Deployment', desc:'Launching optimised solutions with CI/CD pipelines, monitoring, and zero-downtime deployments.' },
  { num:'06', title:'Support', desc:'Ongoing maintenance, performance monitoring, feature development and continuous improvement.' },
];

export default function Process() {
  return (
    <section id="process" style={{padding:'120px 48px',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.05) 0%, transparent 60%)',pointerEvents:'none'}} />

      <div style={{maxWidth:1400,margin:'0 auto'}}>

        <motion.div
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
          style={{textAlign:'center',marginBottom:80}}
        >
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',borderRadius:999,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.25)',color:'#3B82F6',fontSize:11,fontWeight:500,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:24}}>
            How We Work
          </span>
          <h2 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:'clamp(36px,4vw,56px)',fontWeight:700,color:'white',margin:'0 0 16px',letterSpacing:'-0.02em'}}>
            Our Process
          </h2>
          <p style={{color:'#94A3B8',fontSize:18,maxWidth:520,margin:'0 auto',lineHeight:1.6}}>
            A proven six-step framework that turns ideas into exceptional digital products.
          </p>
        </motion.div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:2}}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.1}}
              style={{position:'relative',padding:'40px 36px'}}
            >
              <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',borderRadius:16}} />

              {i < steps.length - 1 && (
                <div style={{position:'absolute',top:52,right:-1,width:2,height:60,background:'linear-gradient(180deg,rgba(59,130,246,0.4),transparent)',zIndex:1,display:i%3===2?'none':'block'}} />
              )}

              <div style={{position:'relative',zIndex:2}}>
                <div style={{fontFamily:'Space Grotesk,sans-serif',fontSize:48,fontWeight:800,background:'linear-gradient(135deg,rgba(59,130,246,0.3),rgba(139,92,246,0.3))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1,marginBottom:16}}>
                  {step.num}
                </div>
                <h3 style={{fontFamily:'Space Grotesk,sans-serif',fontSize:20,fontWeight:600,color:'white',margin:'0 0 12px'}}>
                  {step.title}
                </h3>
                <p style={{color:'#94A3B8',fontSize:14,lineHeight:1.65,margin:0}}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
