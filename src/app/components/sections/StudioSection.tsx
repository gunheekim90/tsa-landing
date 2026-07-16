import { Reveal } from '../anim/Reveal';

// Combined studio proof — both engines represented.
const STATS = [
  { v: '2', k: 'live engines' },
  { v: '30M+', k: 'GEO 학습데이터' },
  { v: '300+', k: 'ToonAgent 사용자' },
  { v: '30+', k: 'clients' },
  { v: '50+', k: 'deployments' },
];

export function StudioSection() {
  return (
    <section
      id="studio"
      className="relative scroll-mt-24 overflow-hidden border-t border-[color:var(--dc-line)] px-5 py-24 md:px-8 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(50% 60% at 50% 0%, rgba(123,57,252,0.14), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-[1240px] text-center">
        <Reveal>
          <div className="font-dc-label text-[12px] uppercase tracking-[0.2em] text-[color:var(--dc-mute)]">
            The studio
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-3xl font-dc-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-[color:var(--dc-ink)]">
            예측과 생산,{' '}
            <span className="text-[color:var(--dc-purple)]">한 루프</span>로.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-dc-body text-[15px] leading-relaxed text-[color:var(--dc-mute)]">
            GEO 모니터링이 <span className="text-[color:var(--dc-ink-soft)]">무엇이 발견될지</span> 예측하고,
            툰에이전트가 <span className="text-[color:var(--dc-ink-soft)]">발견되게 생산</span>합니다.
            발견(discovery)이라는 하나의 문제를 두 엔진으로 풉니다.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <dl
            className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--dc-line)] sm:grid-cols-5"
            style={{ background: 'var(--dc-line)' }}
          >
            {STATS.map((s) => (
              <div key={s.k} className="flex flex-col gap-1 px-3 py-5" style={{ background: 'rgba(13,11,22,0.72)' }}>
                <dt className="font-dc-display text-2xl font-extrabold text-[color:var(--dc-ink)] md:text-3xl">
                  {s.v}
                </dt>
                <dd className="font-dc-label text-[10px] uppercase tracking-[0.12em] text-[color:var(--dc-mute-2)]">
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
