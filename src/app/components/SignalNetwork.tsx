import { motion, useReducedMotion } from 'motion/react';
import { useMemo } from 'react';

// 12 countries Pluora measures (ring around the core).
const COUNTRIES = [
  'KR', 'JP', 'US', 'FR', 'DE', 'GB',
  'SG', 'AU', 'CA', 'BR', 'IN', 'MX',
] as const;

// 7 AI search + 5 SNS sources (upper arc, feeding into the core).
const SOURCES = [
  { label: 'ChatGPT',    kind: 'ai' },
  { label: 'Claude',     kind: 'ai' },
  { label: 'Perplexity', kind: 'ai' },
  { label: 'Gemini',     kind: 'ai' },
  { label: 'AI Mode',    kind: 'ai' },
  { label: 'Overview',   kind: 'ai' },
  { label: 'DeepSeek',   kind: 'ai' },
  { label: 'YouTube',    kind: 'sns' },
  { label: 'Instagram',  kind: 'sns' },
  { label: 'X',          kind: 'sns' },
  { label: 'TikTok',     kind: 'sns' },
  { label: 'Threads',    kind: 'sns' },
] as const;

const CX = 50;
const CY = 50;
const RING_R = 32;     // country ring
const SOURCE_R = 44;   // outer source arc

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

/**
 * Hero background — abstract "signal of all signals" network.
 * No external 3D deps; faux-depth comes from CSS perspective + SVG layering.
 */
export function SignalNetwork() {
  const reduced = useReducedMotion();

  const ring = useMemo(
    () => COUNTRIES.map((c, i) => ({
      code: c,
      ...polar(CX, CY, RING_R, (i / COUNTRIES.length) * 360),
    })),
    []
  );

  const sources = useMemo(
    () => SOURCES.map((s, i) => ({
      ...s,
      ...polar(CX, CY, SOURCE_R, -90 + (i / (SOURCES.length - 1)) * 180),
    })),
    []
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{ perspective: '1200px' }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(18deg) rotateZ(-2deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          {/* Outer ring (countries orbit) */}
          <circle
            cx={CX} cy={CY} r={RING_R}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.08"
          />
          {/* Inner ring (signal halo) */}
          <circle
            cx={CX} cy={CY} r={RING_R * 0.55}
            fill="none"
            stroke="rgba(163,255,18,0.10)"
            strokeWidth="0.06"
          />

          {/* Source → core links */}
          {sources.map((s, i) => (
            <motion.line
              key={`src-${s.label}`}
              x1={s.x} y1={s.y}
              x2={CX} y2={CY}
              stroke={s.kind === 'ai' ? 'rgba(163,255,18,0.22)' : 'rgba(255,255,255,0.10)'}
              strokeWidth="0.08"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={reduced ? { opacity: 0.6 } : { pathLength: [0, 1, 1], opacity: [0, 0.8, 0.4] }}
              transition={reduced ? { duration: 0 } : {
                duration: 3.6,
                delay: 0.3 + i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Core → country rays */}
          {ring.map((p, i) => (
            <motion.line
              key={`ray-${p.code}`}
              x1={CX} y1={CY}
              x2={p.x} y2={p.y}
              stroke="rgba(163,255,18,0.45)"
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={reduced ? { pathLength: 1 } : { pathLength: [0, 1] }}
              transition={reduced ? { duration: 0 } : {
                duration: 2.2,
                delay: 1.2 + i * 0.08,
                repeat: Infinity,
                repeatDelay: 2.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}

          {/* Country nodes */}
          {ring.map((p, i) => (
            <g key={`country-${p.code}`}>
              <motion.circle
                cx={p.x} cy={p.y}
                r="0.7"
                fill="#f5f5f1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
              />
              <motion.circle
                cx={p.x} cy={p.y}
                r="1.6"
                fill="none"
                stroke="rgba(245,245,241,0.18)"
                strokeWidth="0.06"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={reduced ? { opacity: 0.5, scale: 1 } : { opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.2, 0.9] }}
                transition={reduced ? { duration: 0 } : {
                  duration: 3.2,
                  delay: i * 0.12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <text
                x={p.x} y={p.y - 2.4}
                fontSize="1.4"
                fontFamily="ui-monospace, 'SF Mono', monospace"
                fill="rgba(245,245,241,0.45)"
                textAnchor="middle"
              >
                {p.code}
              </text>
            </g>
          ))}

          {/* Source nodes */}
          {sources.map((s, i) => (
            <g key={`source-${s.label}`}>
              <circle
                cx={s.x} cy={s.y}
                r="0.5"
                fill={s.kind === 'ai' ? '#a3ff12' : '#f5f5f1'}
                opacity={s.kind === 'ai' ? 0.85 : 0.55}
              />
              <text
                x={s.x} y={s.y - 1.6}
                fontSize="1.1"
                fontFamily="ui-monospace, 'SF Mono', monospace"
                fill={s.kind === 'ai' ? 'rgba(163,255,18,0.7)' : 'rgba(245,245,241,0.4)'}
                textAnchor="middle"
              >
                {s.label}
              </text>
              {/* faint travelling pulse */}
              {!reduced && (
                <motion.circle
                  cx={s.x} cy={s.y}
                  r="0.35"
                  fill={s.kind === 'ai' ? '#a3ff12' : '#f5f5f1'}
                  initial={{ cx: s.x, cy: s.y, opacity: 0 }}
                  animate={{
                    cx: [s.x, CX],
                    cy: [s.y, CY],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    delay: 0.6 + i * 0.18,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </g>
          ))}

          {/* Core node — Pluora */}
          <motion.circle
            cx={CX} cy={CY}
            r="2.2"
            fill="#a3ff12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx={CX} cy={CY}
            r="4.6"
            fill="none"
            stroke="rgba(163,255,18,0.45)"
            strokeWidth="0.12"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={reduced ? { scale: 1, opacity: 0.5 } : { scale: [0.9, 1.4, 0.9], opacity: [0.6, 0.15, 0.6] }}
            transition={reduced ? { duration: 0 } : {
              duration: 3.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            cx={CX} cy={CY}
            r="7.8"
            fill="none"
            stroke="rgba(163,255,18,0.18)"
            strokeWidth="0.08"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={reduced ? { scale: 1, opacity: 0.3 } : { scale: [0.8, 1.6, 0.8], opacity: [0.35, 0.05, 0.35] }}
            transition={reduced ? { duration: 0 } : {
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />
          <text
            x={CX} y={CY + 0.6}
            fontSize="1.4"
            fontFamily="ui-monospace, 'SF Mono', monospace"
            fontWeight="500"
            fill="#050505"
            textAnchor="middle"
          >
            Pluora
          </text>
        </svg>
      </div>

      {/* Vignette to ground the type over the network */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 55%, transparent 0%, rgba(5,5,5,0.55) 60%, rgba(5,5,5,0.9) 100%)',
        }}
      />
    </div>
  );
}
