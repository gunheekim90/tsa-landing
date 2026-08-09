import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { JOURNEY } from '../../content';

/**
 * 여정 3단계 — 진단 → 구축 → 운영.
 * joshua의 파스텔 카드 대신 뉴트럴 화이트 카드 + 큰 넘버 + 헤어라인 (변주).
 */
export function JourneySection() {
  return (
    <section
      id="journey"
      className="scroll-mt-24 bg-[color:var(--lt-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow index="01" label="The journey" />
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="whitespace-pre-line break-keep font-dc-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[color:var(--lt-ink)]">
              {JOURNEY.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md font-dc-body text-[15px] leading-[1.75] text-[color:var(--lt-mute)]">
              {JOURNEY.lead}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {JOURNEY.steps.map((step, i) => (
            <Reveal key={step.num} delay={0.08 * i} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--lt-line)] bg-[color:var(--lt-card)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(17,16,21,0.25)]">
                <div className="flex items-baseline justify-between">
                  <span className="font-dc-display text-[2.4rem] font-semibold leading-none tracking-[-0.02em] text-[color:var(--lt-mute-2)] opacity-35">
                    {step.num}
                  </span>
                  <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--lt-purple)]">
                    {step.name}
                  </span>
                </div>
                <h3 className="mt-7 font-dc-display text-[1.25rem] font-semibold tracking-[-0.01em] leading-snug text-[color:var(--lt-ink)]">
                  {step.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-[color:var(--lt-line)] pt-5">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-dc-body text-[13.5px] text-[color:var(--lt-mute)]">
                      <span aria-hidden="true" className="font-dc-mono text-[color:var(--lt-mute-2)]">↳</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
