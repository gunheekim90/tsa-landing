import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { WordsPullUp } from './anim/WordsPullUp';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Self-hosted background video (public/hero.mp4).
const HERO_VIDEO = '/hero.mp4';

// Results-oriented, split across both services (GEO = purple, ToonAgent = orange).
const STATS = [
  { svc: 'GEO', tone: 'purple', v: '8.6%', k: '예측 오차 · MAPE' },
  { svc: 'GEO', tone: 'purple', v: '192', k: '검증 발행→인용' },
  { svc: 'ToonAgent', tone: 'orange', v: '300+', k: '실사용자' },
  { svc: 'ToonAgent', tone: 'orange', v: '₩800만', k: '초기 대행매출' },
];

export function StudioHero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 18 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease: EASE },
  });

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--dc-bg)]">
      {/* Background — video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Background — faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.22]" aria-hidden="true" />

      {/* Background — colored glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(58% 52% at 50% 30%, rgba(123,57,252,0.32), transparent 66%), radial-gradient(42% 40% at 84% 82%, rgba(248,123,82,0.16), transparent 70%)',
        }}
      />

      {/* Background — vignette + bottom fade to page */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,7,13,0.60) 0%, rgba(8,7,13,0.12) 28%, rgba(8,7,13,0.74) 80%, var(--dc-bg) 100%)',
        }}
      />

      {/* Background — grain */}
      <div className="dc-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1240px] flex-col justify-center px-5 pb-20 pt-32 md:px-8">
        {/* Badge */}
        <motion.div {...rise(0.15)} className="mb-7">
          <span className="dc-glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--dc-purple)] px-2.5 py-0.5 font-dc-label text-[11px] font-bold uppercase tracking-[0.08em] text-white">
              <Sparkles className="h-3 w-3" /> New
            </span>
            <span className="font-dc-body text-[13px] text-[color:var(--dc-ink-soft)]">
              두 개의 AI 엔진, 이제 한 스튜디오에서
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="font-dc-display font-extrabold tracking-[-0.03em] text-[color:var(--dc-ink)]"
          style={{ fontSize: 'clamp(2.5rem, 6.6vw, 5.75rem)', lineHeight: 0.98 }}
        >
          <span className="block">
            <WordsPullUp
              delay={0.32}
              segments={[
                { text: 'Predict what gets' },
                {
                  text: 'discovered.',
                  className: 'font-dc-serif font-normal italic text-[color:var(--dc-purple)]',
                },
              ]}
            />
          </span>
          <span className="block">
            <WordsPullUp
              delay={0.5}
              segments={[
                { text: 'Produce what gets' },
                {
                  text: 'watched.',
                  className: 'font-dc-serif font-normal italic text-[color:var(--dc-orange)]',
                },
              ]}
            />
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          {...rise(0.9)}
          className="mt-7 max-w-xl font-dc-body text-[15px] leading-relaxed text-[color:var(--dc-mute)] md:text-base"
        >
          서울 기반 예측 마케팅 AI 스튜디오.{' '}
          <span className="text-[color:var(--dc-ink-soft)]">GEO 모니터링</span>이 무엇이 어디서
          노출·인용될지 발행 전에 예측하고,{' '}
          <span className="text-[color:var(--dc-ink-soft)]">툰에이전트</span>가 그걸 숏폼으로
          생산합니다.
        </motion.p>

        {/* CTAs */}
        <motion.div {...rise(1.05)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--dc-purple)] px-6 py-3.5 font-dc-label text-sm font-semibold text-white shadow-[0_18px_50px_-16px_rgba(123,57,252,0.95)] transition-transform hover:-translate-y-0.5"
          >
            무료 진단 신청
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#geo"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--dc-line)] bg-[color:var(--dc-navy)] px-6 py-3.5 font-dc-label text-sm font-semibold text-[color:var(--dc-ink)] transition-colors hover:border-[color:var(--dc-purple-line)]"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            스튜디오 둘러보기
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.dl
          {...rise(1.2)}
          className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--dc-line)] sm:grid-cols-4"
          style={{ background: 'var(--dc-line)' }}
        >
          {STATS.map((s) => (
            <div
              key={s.k}
              className="flex flex-col gap-1 px-4 py-4 backdrop-blur-md"
              style={{ background: 'rgba(13,11,22,0.72)' }}
            >
              <dt
                className="font-dc-label text-[9px] font-bold uppercase tracking-[0.14em]"
                style={{ color: s.tone === 'orange' ? 'var(--dc-orange)' : 'var(--dc-purple)' }}
              >
                {s.svc}
              </dt>
              <dd className="font-dc-display text-2xl font-bold text-[color:var(--dc-ink)]">{s.v}</dd>
              <span className="font-dc-label text-[11px] uppercase tracking-[0.08em] text-[color:var(--dc-mute-2)]">
                {s.k}
              </span>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll cue */}
      <motion.div
        {...rise(1.45)}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2 font-dc-label text-[10px] uppercase tracking-[0.25em] text-[color:var(--dc-mute-2)]">
          scroll
          <span className="block h-8 w-px bg-gradient-to-b from-[color:var(--dc-purple)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
