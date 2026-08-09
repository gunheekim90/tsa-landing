import { useReducedMotion } from 'motion/react';
import { Reveal } from './anim/Reveal';
import { CLIENTS, STATS } from '../content';

/**
 * 히어로 직후 신뢰 밴드 — 성과 스토리형 스탯 4개(숫자가 변화를 말하게)
 * + 전체 포트폴리오·파트너 무한 횡스크롤 마퀴.
 */
function ClientMarquee() {
  const reduce = useReducedMotion();

  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden || undefined}
    >
      {CLIENTS.map((c) => (
        <span
          key={c}
          className="flex items-center gap-12 whitespace-nowrap font-dc-display text-[17px] font-semibold tracking-[-0.01em] text-[color:var(--lt-mute-2)]"
        >
          {c}
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[color:var(--lt-line)]" />
        </span>
      ))}
    </div>
  );

  if (reduce) {
    // reduced-motion: 애니메이션 없이 전체 나열
    return (
      <div className="flex flex-wrap items-center gap-x-10 gap-y-3 py-7">
        {CLIENTS.map((c) => (
          <span key={c} className="font-dc-display text-[16px] font-semibold text-[color:var(--lt-mute-2)]">
            {c}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className="lt-marquee relative overflow-hidden py-7"
      role="marquee"
      aria-label={`포트폴리오·파트너: ${CLIENTS.join(', ')}`}
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="lt-marquee-track flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="border-y border-[color:var(--lt-line)] bg-[color:var(--lt-card)] px-5 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 py-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k} className="flex flex-col gap-1.5">
                <dd className="order-1 break-keep font-dc-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[-0.02em] text-[color:var(--lt-ink)]">
                  {s.v}
                </dd>
                <dt className="order-2 break-keep font-dc-body text-[12.5px] leading-snug text-[color:var(--lt-mute-2)]">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="border-t border-[color:var(--lt-line)]">
          <ClientMarquee />
        </div>
      </div>
    </section>
  );
}
