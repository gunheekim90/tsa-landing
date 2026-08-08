import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Fade + rise on scroll into view, once. Reduced-motion에서는 정적 렌더. */
export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
