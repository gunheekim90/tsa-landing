import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { SERVICES, STUDIO } from '../../content';

/** 서비스명 타이포 워드마크 — 서비스별 자간·웨이트 개성 (라이트). */
const WORDMARK_STYLE: Record<string, string> = {
  우주콜: 'tracking-[0.26em] font-semibold',
  텔링사주: 'tracking-[0.14em] font-light',
  마이크로웨이브: 'tracking-[-0.04em] font-bold',
  사장노트: 'tracking-[0.1em] font-medium',
  투니: 'tracking-[-0.02em] font-extrabold',
};

export function StudioServicesSection() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 border-t border-[color:var(--lt-line)] bg-[color:var(--lt-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow index="05" label="Startup studio — built & operated" />
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-6">
            <h2 className="whitespace-pre-line break-keep font-dc-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-[color:var(--lt-ink)]">
              {STUDIO.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6">
            <p className="max-w-lg font-dc-body text-[15px] leading-[1.75] text-[color:var(--lt-mute)]">
              {STUDIO.lead}
            </p>
            <p className="mt-4 max-w-lg font-dc-body text-[13.5px] leading-[1.75] text-[color:var(--lt-mute-2)]">
              {STUDIO.founderNote}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i} className="h-full">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-[color:var(--lt-line)] bg-[color:var(--lt-card)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--lt-purple-line)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-dc-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--lt-mute-2)]">
                    {String(i + 1).padStart(2, '0')} — Live
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--lt-mute-2)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--lt-purple)]" />
                </div>
                <div>
                  <div className={`font-dc-display text-[1.15rem] text-[color:var(--lt-ink)] ${WORDMARK_STYLE[s.name] ?? ''}`}>
                    {s.name}
                  </div>
                  <p className="mt-1.5 font-dc-body text-[12.5px] leading-relaxed text-[color:var(--lt-mute)]">
                    {s.tagline}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <div className="mt-4 flex min-h-[60px] items-center justify-between rounded-2xl border border-dashed border-[color:var(--lt-line)] px-6 py-4">
            <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--lt-mute-2)]">
              06 — Next
            </span>
            <span className="font-dc-body text-[13px] text-[color:var(--lt-mute-2)]">
              다음 서비스를 준비하고 있습니다.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
