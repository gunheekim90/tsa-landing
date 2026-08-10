import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './anim/Reveal';
import { HERO } from '../content';

/**
 * Hero — 좌정렬(joshua 센터 정렬의 변주) + 핵심 구절 형광 하이라이트 마크.
 * 하이라이트는 뷰포트 진입 시 좌→우 scaleX 드로잉, reduced-motion에선 정적.
 */
function HighlightMark({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-block whitespace-nowrap">
      {/* 마크는 z-auto로 깔고, 텍스트를 relative로 올려 페인트 순서로 겹침 해결
          (-z-10은 섹션 배경 뒤로 숨는 버그) */}
      {reduce ? (
        <span
          className="absolute inset-x-[-0.08em] bottom-[0.02em] top-[0.12em] rounded-[0.18em] bg-[color:var(--lt-purple-soft)]"
          aria-hidden="true"
        />
      ) : (
        <motion.span
          className="absolute inset-x-[-0.08em] bottom-[0.02em] top-[0.12em] origin-left rounded-[0.18em] bg-[color:var(--lt-purple-soft)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
      )}
      <span className="relative">{children}</span>
    </span>
  );
}

export function LightHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[color:var(--lt-bg)] px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44"
    >
      {/* 좌상단 초저채도 퍼플 글로우 */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 12% -10%, rgba(109,46,240,0.08), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl whitespace-pre-line break-keep font-dc-display text-[clamp(2.5rem,6.5vw,4.8rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[color:var(--lt-ink)]">
            {HERO.headline.map((seg, i) =>
              seg.highlight ? (
                <HighlightMark key={i}>{seg.text}</HighlightMark>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
            <span className="text-[color:var(--lt-purple)]">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl whitespace-pre-line font-dc-body text-[16px] leading-[1.8] text-[color:var(--lt-mute)]">
            {HERO.sub}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={HERO.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--lt-ink)] px-7 py-3.5 font-dc-label text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--lt-line)] bg-[color:var(--lt-card)] px-7 py-3.5 font-dc-label text-[14px] font-semibold text-[color:var(--lt-ink)] transition-colors hover:border-[color:var(--lt-purple-line)]"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {HERO.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 font-dc-mono text-[11px] tracking-[0.08em] text-[color:var(--lt-mute-2)]"
              >
                <span aria-hidden="true" className="text-[color:var(--lt-purple)]">✓</span>
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
