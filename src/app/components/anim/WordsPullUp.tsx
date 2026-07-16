import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface WordSegment {
  text: string;
  /** className applied to every word in this segment (e.g. an italic accent color) */
  className?: string;
}

interface WordsPullUpProps {
  segments: WordSegment[];
  className?: string;
  /** delay before the first word animates in (seconds) */
  delay?: number;
  /** per-word stagger (seconds) */
  stagger?: number;
  duration?: number;
}

/**
 * Splits segments into individual words and reveals them with a staggered
 * "pull up" (y + opacity). Preserves per-segment className so accent words
 * (e.g. an italic serif in a different color) animate in with the rest.
 * Triggers once when scrolled into view.
 */
export function WordsPullUp({
  segments,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 0.6,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const words = segments.flatMap((seg, si) =>
    seg.text
      .split(' ')
      .filter(Boolean)
      .map((w, wi) => ({ w, className: seg.className, key: `${si}-${wi}` })),
  );

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'baseline' }}
    >
      {words.map((it, i) => (
        <motion.span
          key={it.key}
          className={it.className}
          style={{ display: 'inline-block', paddingRight: '0.26em', willChange: 'transform, opacity' }}
          initial={{ y: 22, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 22, opacity: 0 }}
          transition={{ delay: delay + i * stagger, duration, ease: EASE }}
        >
          {it.w}
        </motion.span>
      ))}
    </span>
  );
}
