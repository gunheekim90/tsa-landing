import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { CASES } from '../../content';

/**
 * 사례 — 카드 그리드 금지. 1 피처 + 3 에디토리얼 리스트 행(헤어라인 디바이더).
 * 고객명을 헤드라인 문장 안에 넣는 저널리즘 포맷. 수치 창작 금지 — 상태 서술로.
 */
export function WorkSection() {
  const [feature, ...rest] = CASES;

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-[color:var(--dc-line)] bg-[color:var(--dc-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="02" label="Selected work" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-dc-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[color:var(--dc-ink)]">
            이미 기업 안에서
            <br />
            돌아가고 있습니다.
          </h2>
        </Reveal>

        {/* 피처 1건 — 한솔엠에스 ChargeFLOW */}
        <Reveal delay={0.12}>
          <article className="mt-16 border-y border-[color:var(--dc-line)] py-12 md:py-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="flex flex-col gap-2 md:col-span-3">
                <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                  Client impact
                </span>
                <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                  실서비스 운영 중
                </span>
                <div className="mt-3 flex gap-2">
                  {feature.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[color:var(--dc-line)] px-2 py-0.5 font-dc-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dc-mute)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-dc-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-medium leading-[1.3] tracking-[-0.02em] text-[color:var(--dc-ink)] md:col-span-9">
                한솔엠에스와 함께 — 전기차 충전 관제를 SaaS로 옮기고,
                <br className="hidden md:block" /> Claude 기반 AI 상담이 24시간 응대합니다.
              </p>
            </div>
          </article>
        </Reveal>

        {/* 나머지 3건 — 헤어라인 리스트 행 */}
        <div>
          {rest.map((c, i) => (
            <Reveal key={c.client} delay={0.08 + 0.06 * i}>
              <article className="grid grid-cols-1 gap-2 border-b border-[color:var(--dc-line)] py-7 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)] md:grid-cols-12 md:items-baseline md:gap-6">
                <div className="flex gap-2 md:col-span-3">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[color:var(--dc-line)] px-2 py-0.5 font-dc-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dc-mute-2)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-dc-display text-[1.15rem] font-semibold tracking-[-0.01em] text-[color:var(--dc-ink)] md:col-span-4">
                  {c.client}
                </h3>
                <p className="font-dc-body text-[14px] leading-relaxed text-[color:var(--dc-mute)] md:col-span-5">
                  {c.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 font-dc-mono text-[12px] uppercase tracking-[0.14em] text-[color:var(--dc-mute-2)]">
            + 국내외 15개 이상의 프로젝트 · 미국 · 일본 · 프랑스
          </p>
        </Reveal>
      </div>
    </section>
  );
}
