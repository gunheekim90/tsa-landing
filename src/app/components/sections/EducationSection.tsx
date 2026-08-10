import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { EDUCATION } from '../../content';

/**
 * 교육 — "만든 사람이 가르칩니다".
 * 대표의 Class101·패스트캠퍼스·스파르타코딩클럽·코드잇 강의·콘텐츠 이력 기반(대표 제공 사실).
 */
export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-[color:var(--lt-line)] bg-[color:var(--lt-bg-2)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow index="06" label="기업 AI 교육" />
        </Reveal>
        <div className="mt-6 max-w-[820px]">
          <Reveal delay={0.06}>
            <h2 className="whitespace-pre-line break-keep font-dc-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[color:var(--lt-ink)]">
              {EDUCATION.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[720px] font-dc-body text-[15px] leading-[1.8] text-[color:var(--lt-mute)]">
              {EDUCATION.lead}
            </p>
          </Reveal>
        </div>

        {/* 플랫폼 이력 로우 */}
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--lt-line)] py-6">
            <span className="font-dc-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--lt-mute-2)]">
              강의·콘텐츠 이력
            </span>
            {EDUCATION.platforms.map((p) => (
              <span key={p} className="font-dc-display text-[15px] font-semibold tracking-[-0.01em] text-[color:var(--lt-mute-2)]">
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        {/* 교육 상품 4종 */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EDUCATION.programs.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--lt-line)] bg-[color:var(--lt-card)] p-7">
                <span className="font-dc-mono text-[11px] text-[color:var(--lt-purple)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-dc-display text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-[color:var(--lt-ink)]">
                  {p.title}
                </h3>
                <p className="mt-2.5 font-dc-body text-[13px] leading-[1.75] text-[color:var(--lt-mute)]">
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 font-dc-body text-[14px] text-[color:var(--lt-mute)]">
            교육 문의는{' '}
            <a href="#contact" className="font-semibold text-[color:var(--lt-purple)] underline-offset-4 hover:underline">
              상담 폼
            </a>
            에서 "기업교육 · 강의/워크숍"을 선택해 주세요.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
