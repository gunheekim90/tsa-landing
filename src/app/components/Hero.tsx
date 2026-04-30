import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { trackEvent } from '@/lib/gtag';

const stages = [
  { code: 'D', label: 'discovery',    note: 'top of funnel',    x: 8 },
  { code: 'A', label: 'activation',   note: 'mid funnel',       x: 36 },
  { code: 'C', label: 'conversation', note: 'bottom of funnel', x: 64 },
  { code: 'H', label: 'horizon',      note: 'adjacent track',   x: 92 },
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // 3-layer parallax — slowest at the back
  const yGrid     = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const yCoords   = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const yHeadline = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Layer 1 — grid backdrop (slowest) */}
      <motion.div
        style={reduced ? undefined : { y: yGrid }}
        className="absolute inset-0 bg-grid pointer-events-none"
        aria-hidden
      />
      {/* Soft radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 40%, rgba(163,255,18,0.06), transparent 70%), radial-gradient(80% 60% at 20% 80%, rgba(255,255,255,0.025), transparent 70%)',
        }}
        aria-hidden
      />

      {/* Layer 2 — funnel coordinates (mid speed) */}
      <motion.svg
        style={reduced ? undefined : { y: yCoords, opacity: opacityFade }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[18%] h-[40%] w-full pointer-events-none"
        aria-hidden
      >
        {/* horizontal axis */}
        <motion.line
          x1="2" y1="60" x2="98" y2="60"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* connecting line through stages */}
        <motion.path
          d={`M ${stages[0].x} 60 L ${stages[1].x} 50 L ${stages[2].x} 56 L ${stages[3].x} 42`}
          fill="none"
          stroke="rgba(163,255,18,0.55)"
          strokeWidth="0.18"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* stage nodes */}
        {stages.map((s, i) => {
          const y = [60, 50, 56, 42][i];
          return (
            <g key={s.code}>
              <motion.circle
                cx={s.x} cy={y} r="0.7"
                fill="#a3ff12"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
              />
              <motion.circle
                cx={s.x} cy={y} r="2.2"
                fill="none"
                stroke="rgba(163,255,18,0.35)"
                strokeWidth="0.1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 + i * 0.15, duration: 0.6 }}
              />
            </g>
          );
        })}
      </motion.svg>

      {/* Layer 3 — content (fastest / topmost) */}
      <motion.div
        style={reduced ? undefined : { y: yHeadline, opacity: opacityFade }}
        className="relative z-10 w-full"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 pt-32 md:pt-40 pb-24">
          {/* Left mono sidebar — desktop only.
              On mobile, brand + headline + summary alone carry the hero. */}
          <aside
            aria-hidden
            className="hidden lg:flex lg:col-span-3 lg:col-start-1 lg:row-start-1 flex-col justify-end gap-8 mono-meta"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[color:var(--mute-2)]">— index</span>
              <span className="font-mono text-[color:var(--paper)]">00 · hero</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[color:var(--mute-2)]">— focus</span>
              <span className="font-mono text-[color:var(--paper)]">discovery measurement</span>
              <span className="font-mono text-[color:var(--mute-1)]">+ full-funnel models</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[color:var(--mute-2)]">— lab</span>
              <span className="font-mono text-[color:var(--paper)]">Seoul, KR</span>
              <span className="font-mono text-[color:var(--mute-1)]">50+ deployments</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="signal-dot" aria-hidden />
              <span className="font-mono text-[color:var(--paper)]">system online</span>
            </motion.div>
          </aside>

          {/* Headline cluster (visually first on every viewport) */}
          <div className="col-span-12 lg:col-span-9 lg:col-start-4 lg:row-start-1 order-1 lg:order-2 flex flex-col gap-8 md:gap-10">
            {/* Wordmark — TSA brand at the top */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-none tracking-tight text-[color:var(--paper)]">
                Two<span className="text-[color:var(--signal)]">Steps</span>Ahead
              </span>
              <span className="mono-eyebrow">— marketing intelligence lab · measurement-first</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="display-xl text-[color:var(--paper)]"
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                We&nbsp;
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', fontWeight: 300 }}
                >
                  measure
                </em>
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                how brands get&nbsp;
                <span className="relative inline-block">
                  <span className="relative z-10">found</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 bottom-[0.18em] h-[0.12em] bg-[color:var(--signal)] origin-left"
                    aria-hidden
                  />
                </span>
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                in the&nbsp;
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', fontWeight: 300 }}
                >
                  AI era.
                </em>
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 max-w-4xl"
            >
              <div className="md:col-span-7 text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
                <span className="text-[color:var(--paper)]">노출 측정이 시작이다.</span>{' '}
                TwoStepsAhead는 검색과 AI 검색에서 어떤 콘텐츠가 인용될지 발행 전에 알려주는{' '}
                <span className="text-[color:var(--paper)]">GeoRank24</span>를 코어 모델로,
                그 위에 활성화·응대·인접 영역을 잇는 모델 라이브러리를 운영한다.
              </div>
              <div className="md:col-span-5 mono-meta border-l border-[color:var(--ink-line)] pl-5 flex flex-col gap-2">
                <span className="text-[color:var(--mute-1)]">core model</span>
                <span className="text-[color:var(--paper)]">G24-DISCOVERY</span>
                <span className="text-[color:var(--mute-2)]">MAPE 8.6% · 4M+ rows</span>
              </div>
            </motion.div>

            {/* CTA row + funnel index */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6"
            >
              <div className="flex gap-3">
                <a
                  href="#models"
                  onClick={() => trackEvent('cta_click', { cta_name: 'hero_models' })}
                  className="group inline-flex items-center gap-3 bg-[color:var(--signal)] text-[color:var(--ink-base)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--paper)] transition-colors"
                >
                  <span>Browse models</span>
                  <span className="font-mono text-xs opacity-70 group-hover:opacity-100">↗</span>
                </a>
                <a
                  href="#research"
                  onClick={() => trackEvent('cta_click', { cta_name: 'hero_research' })}
                  className="inline-flex items-center gap-3 border border-[color:var(--ink-line)] hover:border-[color:var(--signal-line)] hover:text-[color:var(--signal)] text-[color:var(--paper)] px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Read research
                </a>
              </div>

              {/* Funnel index — under CTA on desktop */}
              <ol className="flex items-center gap-6 mono-meta">
                {stages.map((s) => (
                  <li key={s.code} className="flex items-center gap-2">
                    <span className="font-mono text-[color:var(--signal)]">{s.code}</span>
                    <span className="text-[color:var(--mute-1)]">{s.label}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom hairline + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-0 inset-x-0 px-6 md:px-10 pb-6 flex items-end justify-between mono-meta"
      >
        <div className="flex items-center gap-3">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block w-16 h-px bg-[color:var(--mute-2)] origin-left"
            aria-hidden
          />
          <span>scroll · 01 / 06</span>
        </div>
        <span className="hidden md:inline">↓ research</span>
      </motion.div>
    </section>
  );
}
