"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function AnimatedButton({
  children,
  variant = "primary",
  className,
  onClick,
  href,
}: AnimatedButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide overflow-hidden transition-premium cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue to-accent-cyan text-white glow-blue hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]",
    secondary:
      "border-gradient text-white hover:bg-white/5 hover:scale-105",
    ghost:
      "text-text-muted hover:text-white hover:bg-white/5",
  };

  const content = (
    <motion.span
      className={cn(base, variants[variant], className)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
