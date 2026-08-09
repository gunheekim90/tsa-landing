import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { CASES_FEATURED, CASES_LIST, TECH_META } from '../../content';

/**
 * 사례 — 피처 3카드(수치 헤드라인) + 넘버 리스트 + 기술 meta 라인.
 * joshua보다 앞 순서로 배치(증거 먼저 — 변주). 수치 창작 금지.
 */
export function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-[color:var(--lt-line)] bg-[color:var(--lt-bg-2)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow index="02" label="Case studies" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl break-keep font-dc-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[color:var(--lt-ink)]">
            이런 걸
            <br />
            만들어 왔습니다.
          </h2>
        </Reveal>

        {/* 피처 3카드 */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASES_FEATURED.map((c, i) => (
            <Reveal key={c.client} delay={0.08 * i} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--lt-line)] bg-[color:var(--lt-card)] p-8">
                <div className="flex gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--lt-line)] px-2.5 py-0.5 font-dc-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--lt-mute-2)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 font-dc-display text-[1.3rem] font-semibold leading-[1.4] tracking-[-0.01em] text-[color:var(--lt-ink)]">
                  {c.headline}
                </h3>
                <p className="mt-3 font-dc-body text-[14px] leading-[1.75] text-[color:var(--lt-mute)]">
                  {c.detail}
                </p>
                <p className="mt-auto pt-6 font-dc-mono text-[11.5px] tracking-[0.06em] text-[color:var(--lt-mute-2)]">
                  — {c.client}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 넘버 리스트 */}
        <div className="mt-10">
          {CASES_LIST.map((c, i) => (
            <Reveal key={c.client} delay={0.05 * i}>
              <article className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-[color:var(--lt-line)] py-5 first:border-t md:grid-cols-[3rem_1fr_1.4fr]">
                <span className="font-dc-mono text-[12px] text-[color:var(--lt-mute-2)]">{c.num}</span>
                <h3 className="font-dc-display text-[1.02rem] font-semibold tracking-[-0.01em] text-[color:var(--lt-ink)]">
                  {c.client}
                </h3>
                <p className="col-start-2 font-dc-body text-[13.5px] text-[color:var(--lt-mute)] md:col-start-3">
                  {c.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 기술 meta 라인 — 별도 섹션 대신 압축(변주) */}
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2.5">
            {TECH_META.map((t) => (
              <span key={t} className="font-dc-mono text-[11px] uppercase tracking-[0.1em] text-[color:var(--lt-mute-2)]">
                ↳ {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
