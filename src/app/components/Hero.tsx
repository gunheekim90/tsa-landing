import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { trackEvent } from '@/lib/gtag';
import { SignalNetwork } from './SignalNetwork';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yHeadline = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Layer 0 — grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />

      {/* Layer 1 — Signal Network (faux 3D) */}
      <SignalNetwork />

      {/* Layer 2 — content */}
      <motion.div
        style={reduced ? undefined : { y: yHeadline, opacity: opacityFade }}
        className="relative z-10 w-full"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 pt-32 md:pt-40 pb-24">
          {/* Mono sidebar */}
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
              <span className="text-[color:var(--mute-2)]">— category</span>
              <span className="font-mono text-[color:var(--paper)]">Predictive Marketing AI</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[color:var(--mute-2)]">— core</span>
              <span className="font-mono text-[color:var(--paper)]">Pluora · v0.4</span>
              <span className="font-mono text-[color:var(--mute-1)]">7 AI · 5 SNS · 12 countries</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[color:var(--mute-2)]">— lab</span>
              <span className="font-mono text-[color:var(--paper)]">Seoul, KR</span>
              <span className="font-mono text-[color:var(--mute-1)]">30M+ rows · weekly</span>
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

          {/* Headline cluster */}
          <div className="col-span-12 lg:col-span-9 lg:col-start-4 lg:row-start-1 flex flex-col gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-none tracking-tight text-[color:var(--paper)]">
                Two<span className="text-[color:var(--signal)]">Steps</span>Ahead
              </span>
              <span className="mono-eyebrow">— predictive marketing AI lab · seoul</span>
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
                The&nbsp;
                <em className="font-display" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  signal
                </em>
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                of all&nbsp;
                <span className="relative inline-block">
                  <span className="relative z-10">signals.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 bottom-[0.18em] h-[0.12em] bg-[color:var(--signal)] origin-left"
                    aria-hidden
                  />
                </span>
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 max-w-4xl"
            >
              <div className="md:col-span-7 text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
                <span className="text-[color:var(--paper)]">AI가 결정하는 모든 노출 — AI 검색 · SNS · 추천 알고리즘.</span>{' '}
                코어 모델 <span className="text-[color:var(--paper)]">Pluora</span>가 발행 전에 예측하고,
                그 위에 활성화·응대를 잇는 모델 라이브러리를 운영합니다.
              </div>
              <div className="md:col-span-5 mono-meta border-l border-[color:var(--ink-line)] pl-5 flex flex-col gap-2">
                <span className="text-[color:var(--mute-1)]">core model</span>
                <span className="text-[color:var(--paper)]">Pluora · v0.4</span>
                <span className="text-[color:var(--mute-2)]">MAPE 8.6% · 30M+ rows · 192 cases</span>
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6"
            >
              <div className="flex gap-3">
                <a
                  href="#products"
                  onClick={() => trackEvent('cta_click', { cta_name: 'hero_products' })}
                  className="group inline-flex items-center gap-3 bg-[color:var(--signal)] text-[color:var(--ink-base)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--paper)] transition-colors"
                >
                  <span>View products</span>
                  <span className="font-mono text-xs opacity-70 group-hover:opacity-100">↗</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { cta_name: 'hero_inquiry' })}
                  className="inline-flex items-center gap-3 border border-[color:var(--ink-line)] hover:border-[color:var(--signal-line)] hover:text-[color:var(--signal)] text-[color:var(--paper)] px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Open inquiry
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom hairline + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-0 inset-x-0 px-6 md:px-10 pb-6 flex items-end justify-between mono-meta z-10"
      >
        <div className="flex items-center gap-3">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block w-16 h-px bg-[color:var(--mute-2)] origin-left"
            aria-hidden
          />
          <span>scroll · 01 / 04</span>
        </div>
        <span className="hidden md:inline">↓ thesis</span>
      </motion.div>
    </section>
  );
}
