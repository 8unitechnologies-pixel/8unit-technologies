"use client";

export default function NoiseBackground() {
  return (
    <>
      {/* Base gradient */}
      <div className="fixed inset-0 -z-20 bg-background" />

      {/* Ambient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px] animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[100px] animate-glow-pulse [animation-delay:4s]" />
      </div>

      {/* Grid */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-40 pointer-events-none" />
    </>
  );
}
