import { Reveal } from './anim/Reveal';
import { WordsPullUp } from './anim/WordsPullUp';
import { Eyebrow } from './Eyebrow';
import { HERO } from '../content';

/**
 * Hero — "기업의 AI 전환, 두 걸음 앞서."
 * 리서치 규율: 대형 타이포는 weight 500·tracking -0.03em(볼드 대형은 배너처럼 보임),
 * 퍼플은 문장 끝 마침표와 CTA에만. 배경은 CSS 헤어라인 그리드 + 초저채도 글로우.
 */
export function AxHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-[color:var(--dc-bg)] px-5 pb-10 pt-32 md:px-8 md:pb-14"
    >
      {/* 배경: 헤어라인 세로 그리드 + 우하단 초저채도 퍼플 글로우 + 그레인 */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 120px)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 72% 112%, rgba(123,57,252,0.12), transparent 65%)',
        }}
      />
      <div className="dc-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* 두 걸음 모티프 — 우상단에 계단형 헤어라인 사각 2개 */}
      <div className="pointer-events-none absolute right-[8%] top-[16%] hidden lg:block" aria-hidden="true">
        <div className="h-40 w-40 border border-[color:var(--dc-line)]" />
        <div className="-mt-20 ml-20 h-40 w-40 border border-[color:var(--dc-purple-line)] opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px]">
        <Reveal>
          <Eyebrow index="00" label="AX · DX · AI Studio — Seoul" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <h1 className="col-span-full font-dc-display text-[clamp(2.75rem,8vw,6.4rem)] font-medium leading-[1.06] tracking-[-0.03em] text-[color:var(--dc-ink)] lg:col-span-8">
            <WordsPullUp segments={[{ text: HERO.headline[0] }]} />
            <br />
            <WordsPullUp
              segments={[{ text: HERO.headline[1].replace(/\.$/, '') }]}
              delay={0.18}
            />
            <span className="text-[color:var(--dc-purple)]">.</span>
          </h1>
          <div className="lg:col-span-4">
            <Reveal delay={0.35}>
              <p className="max-w-sm whitespace-pre-line font-dc-body text-[15px] leading-[1.75] text-[color:var(--dc-mute)]">
                {HERO.sub}
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={HERO.primaryCta.href}
                  className="group inline-flex items-center gap-2 font-dc-mono text-[13px] uppercase tracking-[0.08em] text-[color:var(--dc-purple-text)] transition-colors hover:text-[color:var(--dc-ink)]"
                >
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↳</span>
                  {HERO.primaryCta.label}
                </a>
                <a
                  href={HERO.secondaryCta.href}
                  className="group inline-flex items-center gap-2 font-dc-mono text-[13px] uppercase tracking-[0.08em] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
                >
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↳</span>
                  {HERO.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-[color:var(--dc-line)]" aria-hidden="true" />
      </div>
    </section>
  );
}
