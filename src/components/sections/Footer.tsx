'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const links = {
  Services: ['Custom Software','AI Solutions','Web Development','Mobile Apps','Cloud & DevOps','UI/UX Design'],
  Company: ['About Us','Our Process','Careers'],
  Contact: ['8unitechnologies@gmail.com','Pietermaritzburg, South Africa'],
};

const socials = [
  { label:'GH', href:'#' },
  { label:'TW', href:'#' },
  { label:'LI', href:'#' },
  { label:'EM', href:'mailto:8unitechnologies@gmail.com' },
];

export default function Footer() {
  return (
    <footer style={{padding:'80px 48px 40px',borderTop:'1px solid rgba(255,255,255,0.05)',position:'relative'}}>
      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48,marginBottom:64}}>

          <div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
              <div style={{width:38,height:38,borderRadius:10,background:'linear-gradient(135deg,#3B82F6,#8B5CF6)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'Space Grotesk,sans-serif',fontWeight:700,fontSize:14,boxShadow:'0 0 20px rgba(59,130,246,0.35)'}}>
                8U
              </div>
              <span style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:17}}>
                8 Unit <span style={{color:'#94A3B8',fontWeight:400}}>Technologies</span>
              </span>
            </div>
            <p style={{color:'#64748B',fontSize:14,lineHeight:1.7,maxWidth:280,marginBottom:28}}>
              Engineering the future of digital innovation. Premium software for businesses that demand excellence.
            </p>
            <div style={{display:'flex',gap:12}}>
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  style={{width:38,height:38,borderRadius:10,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#94A3B8',textDecoration:'none',fontSize:11,fontWeight:700,fontFamily:'Space Grotesk,sans-serif',transition:'all 0.2s'}}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(59,130,246,0.15)'; e.currentTarget.style.color='#3B82F6'; e.currentTarget.style.borderColor='rgba(59,130,246,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.04)'; e.currentTarget.style.color='#94A3B8'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{fontFamily:'Space Grotesk,sans-serif',fontWeight:600,color:'white',fontSize:13,marginBottom:20,letterSpacing:'0.08em',textTransform:'uppercase'}}>
                {heading}
              </h4>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{color:'#64748B',fontSize:14,textDecoration:'none',transition:'color 0.2s'}}
                      onMouseEnter={e => (e.currentTarget.style.color='#CBD5E1')}
                      onMouseLeave={e => (e.currentTarget.style.color='#64748B')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:32,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
          <p style={{color:'#475569',fontSize:13,margin:0}}>
            © 2025 8 Unit Technologies. All rights reserved.
          </p>
          <p style={{color:'#475569',fontSize:13,margin:0}}>
            Engineered with precision in South Africa 🇿🇦
          </p>
        </div>

      </div>
    </footer>
  );
}
