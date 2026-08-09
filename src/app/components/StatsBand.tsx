import { Reveal } from './anim/Reveal';
import { CLIENTS, STATS } from '../content';

/**
 * 스탯 밴드 + 클라이언트 텍스트월 — 히어로 직후 얇은 신뢰 밴드.
 * 로고 이미지 없이 텍스트 로우(회색)로 클라이언트를 나열한다.
 */
export function StatsBand() {
  return (
    <section className="border-y border-[color:var(--lt-line)] bg-[color:var(--lt-card)] px-5 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 py-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k} className="flex flex-col gap-1.5">
                <dd className="order-1 font-dc-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.02em] text-[color:var(--lt-ink)]">
                  {s.v}
                </dd>
                <dt className="order-2 font-dc-mono text-[10.5px] uppercase tracking-[0.14em] text-[color:var(--lt-mute-2)]">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[color:var(--lt-line)] py-7">
            <span className="font-dc-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--lt-mute-2)]">
              Clients &amp; Partners
            </span>
            {CLIENTS.map((c) => (
              <span key={c} className="font-dc-display text-[15px] font-semibold tracking-[-0.01em] text-[color:var(--lt-mute-2)]">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
