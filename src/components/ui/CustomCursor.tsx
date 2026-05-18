"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => ring.style.transform += " scale(1.8)";
    const onLeave = () => ring.style.transform = ring.style.transform.replace(" scale(1.8)", "");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} style={{position:'fixed',top:0,left:0,width:8,height:8,borderRadius:'50%',background:'#3B82F6',pointerEvents:'none',zIndex:99999,transition:'opacity 0.2s'}} />
      <div ref={ringRef} style={{position:'fixed',top:0,left:0,width:40,height:40,borderRadius:'50%',border:'1px solid rgba(59,130,246,0.6)',pointerEvents:'none',zIndex:99998,transition:'transform 0.15s ease-out',backdropFilter:'blur(1px)'}} />
    </>
  );
}
